import assert from 'node:assert/strict';
import { afterEach, test } from 'node:test';
import { GET } from '../src/pages/api/contributions/[username].ts';

const { Response, URL } = globalThis;
const originalFetch = globalThis.fetch;
const originalDateNow = Date.now;
const originalSetTimeout = globalThis.setTimeout;
const originalClearTimeout = globalThis.clearTimeout;

afterEach(() => {
	globalThis.fetch = originalFetch;
	Date.now = originalDateNow;
	globalThis.setTimeout = originalSetTimeout;
	globalThis.clearTimeout = originalClearTimeout;
});

function request(username) {
	return GET({ params: { username } });
}

test('rejects invalid usernames without calling GitHub', async () => {
	let fetchCalls = 0;
	globalThis.fetch = async () => {
		fetchCalls += 1;
		throw new Error('fetch should not be called');
	};

	for (const username of ['', '-invalid', 'invalid-', 'two--hyphens', 'a'.repeat(40)]) {
		const response = await request(username);
		assert.equal(response.status, 400);
		assert.deepEqual(await response.json(), {
			error: { code: 'INVALID_USERNAME', message: 'Provide a valid GitHub username.' },
		});
	}

	assert.equal(fetchCalls, 0);
});

test('fetches upstream JSON and caches success case-insensitively', async () => {
	let fetchCalls = 0;
	globalThis.fetch = async (url, options) => {
		fetchCalls += 1;
		assert.equal(url, 'https://github.com/Cache-Case.contribs');
		assert.equal(options.headers.Accept, 'application/json');
		return Response.json({ total: 42 });
	};

	const firstResponse = await request('Cache-Case');
	assert.equal(firstResponse.status, 200);
	assert.equal(firstResponse.headers.get('Cache-Control'), 'no-store');
	assert.match(firstResponse.headers.get('Content-Type'), /application\/json/);
	assert.deepEqual(await firstResponse.json(), { total: 42 });

	const cachedResponse = await request('cache-case');
	assert.deepEqual(await cachedResponse.json(), { total: 42 });
	assert.equal(fetchCalls, 1);
});

test('expires cached contributions after one hour', async () => {
	let now = 1_000_000;
	let fetchCalls = 0;
	Date.now = () => now;
	globalThis.fetch = async () => {
		fetchCalls += 1;
		return Response.json({ fetch: fetchCalls });
	};

	await request('cache-expiry');
	now += 60 * 60 * 1000;
	const response = await request('cache-expiry');

	assert.deepEqual(await response.json(), { fetch: 2 });
	assert.equal(fetchCalls, 2);
});

test('evicts the least recently used cache entry when full', async () => {
	const fetchCalls = new Map();
	globalThis.fetch = async (url) => {
		const username = new URL(url).pathname.slice(1).replace('.contribs', '');
		fetchCalls.set(username, (fetchCalls.get(username) ?? 0) + 1);
		return Response.json({ username });
	};

	for (let index = 0; index < 100; index += 1) {
		await request(`lru-user-${index}`);
	}

	await request('lru-user-0');
	await request('lru-extra');
	await request('lru-user-0');
	await request('lru-user-1');

	assert.equal(fetchCalls.get('lru-user-0'), 1);
	assert.equal(fetchCalls.get('lru-user-1'), 2);
});

test('maps upstream not-found, server, invalid JSON, and network failures', async () => {
	const originalConsoleError = globalThis.console.error;
	globalThis.console.error = () => {};

	try {
		for (const [username, upstreamResponse, expectedStatus, expectedCode] of [
			['missing-user', new Response(null, { status: 404 }), 404, 'CONTRIBUTIONS_NOT_FOUND'],
			['server-error', new Response(null, { status: 503 }), 502, 'UPSTREAM_ERROR'],
			['bad-json', new Response('{', { status: 200 }), 502, 'UPSTREAM_ERROR'],
		]) {
			globalThis.fetch = async () => upstreamResponse;
			const response = await request(username);
			assert.equal(response.status, expectedStatus);
			assert.equal((await response.json()).error.code, expectedCode);
		}

		globalThis.fetch = async () => {
			throw new Error('network failure');
		};
		const response = await request('network-error');
		assert.equal(response.status, 502);
		assert.equal((await response.json()).error.code, 'UPSTREAM_ERROR');
	} finally {
		globalThis.console.error = originalConsoleError;
	}
});

test('returns a gateway timeout when the upstream request is aborted', async () => {
	let abortTimeout;
	globalThis.setTimeout = (callback) => {
		abortTimeout = callback;
		return 1;
	};
	globalThis.clearTimeout = () => {};
	globalThis.fetch = async (url, { signal }) => {
		assert.equal(url, 'https://github.com/timeout-user.contribs');
		abortTimeout();
		assert.equal(signal.aborted, true);
		throw new Error('request aborted');
	};

	const response = await request('timeout-user');
	assert.equal(response.status, 504);
	assert.equal((await response.json()).error.code, 'UPSTREAM_TIMEOUT');
});
