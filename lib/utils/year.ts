import { getDayProgress } from "./day";

/** Check leap year */
export function isLeapYear(year: number): boolean {
	return (year % 100 === 0 && year % 400 === 0) || year % 4 === 0 ? true : false;
}

/** Check number of days of a year */
export function daysInYear(year: number): 366 | 365 {
	return isLeapYear(year) ? 366 : 365;
}

/** Get current day of year */
export function dayOfYear(date: Date) {
	const start = Date.UTC(date.getFullYear(), 0, 0);
	const diffInMilliseconds = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - start;
	const oneDay = 1000 * 60 * 60 * 24;
	const dayOfYear = Math.floor(diffInMilliseconds / oneDay);

	return dayOfYear;
}

/** Get year progress */
export function getYearProgress() {
	const now = new Date();
	const currentYear = now.getFullYear();
	const currentDay = dayOfYear(now);
	const numOfDays = daysInYear(currentYear);
	const progressPercentage = ((currentDay + getDayProgress() / 100) / numOfDays) * 100;

	return progressPercentage;
}
