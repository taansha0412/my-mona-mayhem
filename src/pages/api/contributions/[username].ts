import type { APIRoute } from 'astro';

export const prerender = false;

const CACHE_TTL_MS = 60 * 60 * 1000;
const MAX_CACHE_ENTRIES = 100;
const UPSTREAM_TIMEOUT_MS = 10_000;
const USERNAME_PATTERN = /^[a-z\d](?:[a-z\d-]{0,37}[a-z\d])?$/i;

type CacheEntry = {
	data: unknown;
	expiresAt: number;
};

const contributionCache = new Map<string, CacheEntry>();

function jsonResponse(body: unknown, status: number): Response {
	return new Response(JSON.stringify(body), {
		status,
		headers: {
			'Cache-Control': 'no-store',
			'Content-Type': 'application/json; charset=utf-8',
		},
	});
}

function errorResponse(status: number, code: string, message: string): Response {
	return jsonResponse({ error: { code, message } }, status);
}

function getCachedData(username: string): CacheEntry | undefined {
	const cached = contributionCache.get(username);
	if (!cached) {
		return undefined;
	}

	if (cached.expiresAt <= Date.now()) {
		contributionCache.delete(username);
		return undefined;
	}

	contributionCache.delete(username);
	contributionCache.set(username, cached);
	return cached;
}

function cacheData(username: string, data: unknown): void {
	if (contributionCache.has(username)) {
		contributionCache.delete(username);
	} else if (contributionCache.size >= MAX_CACHE_ENTRIES) {
		const oldestUsername = contributionCache.keys().next().value;
		if (oldestUsername !== undefined) {
			contributionCache.delete(oldestUsername);
		}
	}

	contributionCache.set(username, {
		data,
		expiresAt: Date.now() + CACHE_TTL_MS,
	});
}

export const GET: APIRoute = async ({ params }) => {
	const username = params.username;
	if (!username || !USERNAME_PATTERN.test(username) || username.includes('--')) {
		return errorResponse(400, 'INVALID_USERNAME', 'Provide a valid GitHub username.');
	}

	const cacheKey = username.toLowerCase();
	const cached = getCachedData(cacheKey);
	if (cached) {
		return jsonResponse(cached.data, 200);
	}

	const controller = new AbortController();
	const timeout = setTimeout(() => controller.abort(), UPSTREAM_TIMEOUT_MS);

	try {
		const upstreamResponse = await fetch(
			`https://github.com/${encodeURIComponent(username)}.contribs`,
			{
				headers: { Accept: 'application/json' },
				signal: controller.signal,
			},
		);

		if (upstreamResponse.status === 404) {
			return errorResponse(404, 'CONTRIBUTIONS_NOT_FOUND', 'No contribution data was found for that user.');
		}

		if (!upstreamResponse.ok) {
			console.error(`GitHub contribution endpoint returned HTTP ${upstreamResponse.status}.`);
			return errorResponse(502, 'UPSTREAM_ERROR', 'GitHub could not provide contribution data.');
		}

		const data: unknown = await upstreamResponse.json();
		cacheData(cacheKey, data);
		return jsonResponse(data, 200);
	} catch (error) {
		if (controller.signal.aborted) {
			return errorResponse(504, 'UPSTREAM_TIMEOUT', 'GitHub did not respond in time.');
		}

		console.error('Failed to fetch or parse GitHub contribution data.', error);
		return errorResponse(502, 'UPSTREAM_ERROR', 'GitHub could not provide contribution data.');
	} finally {
		clearTimeout(timeout);
	}
};
