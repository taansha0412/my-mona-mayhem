import assert from 'node:assert/strict';
import test from 'node:test';
import { findLongestContributionStreak } from '../src/lib/contributions.ts';

function week(first_day, counts) {
	return {
		first_day,
		contribution_days: counts.map((count, weekday) => ({ count, weekday })),
	};
}

test('finds the longest consecutive streak across week boundaries', () => {
	const streak = findLongestContributionStreak({
		from: '2026-01-01',
		to: '2026-01-14',
		weeks: [
			week('2025-12-28', [0, 0, 0, 0, 1, 1, 1]),
			week('2026-01-04', [1, 1, 0, 1, 1, 1, 1]),
			week('2026-01-11', [1, 0, 0, 0, 0, 0, 0]),
		],
	});

	assert.equal(streak, 5);
});

test('ignores contribution days outside the requested date range', () => {
	const streak = findLongestContributionStreak({
		from: '2026-01-02',
		to: '2026-01-05',
		weeks: [
			week('2025-12-28', [1, 1, 1, 1, 1, 1, 1]),
			week('2026-01-04', [1, 1, 1, 1, 1, 1, 1]),
		],
	});

	assert.equal(streak, 4);
});

test('returns zero when there are no contribution days', () => {
	const streak = findLongestContributionStreak({
		from: '2026-01-01',
		to: '2026-01-07',
		weeks: [week('2025-12-28', [0, 0, 0, 0, 0, 0, 0])],
	});

	assert.equal(streak, 0);
});
