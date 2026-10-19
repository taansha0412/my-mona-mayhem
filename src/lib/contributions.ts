interface ContributionDay {
	count: number;
	weekday: number;
}

interface ContributionWeek {
	first_day: string;
	contribution_days: ContributionDay[];
}

interface ContributionCalendar {
	from: string;
	to: string;
	weeks: ContributionWeek[];
}

const DAY_MS = 24 * 60 * 60 * 1000;

export function findLongestContributionStreak(data: ContributionCalendar): number {
	const rangeStart = Date.parse(`${data.from}T00:00:00Z`);
	const rangeEnd = Date.parse(`${data.to}T00:00:00Z`);
	const contributions = data.weeks
		.flatMap((week) =>
			week.contribution_days.map((day) => {
				const date = new Date(`${week.first_day}T00:00:00Z`);
				date.setUTCDate(date.getUTCDate() + day.weekday);
				return { date: date.getTime(), count: day.count };
			}),
		)
		.filter(({ date }) => date >= rangeStart && date <= rangeEnd)
		.sort((first, second) => first.date - second.date);

	let longestStreak = 0;
	let currentStreak = 0;
	let previousDate: number | undefined;

	for (const { date, count } of contributions) {
		if (count === 0) {
			currentStreak = 0;
		} else {
			currentStreak = previousDate === date - DAY_MS ? currentStreak + 1 : 1;
			longestStreak = Math.max(longestStreak, currentStreak);
		}

		previousDate = date;
	}

	return longestStreak;
}
