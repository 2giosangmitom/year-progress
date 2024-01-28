import { getDayProgress } from "./day";

/**
 * Check leap year
 *
 * @param {number} year
 */
export function isLeapYear(year) {
	return (year % 100 === 0 && year % 400 === 0) || year % 4 === 0
		? true
		: false;
}

/**
 * Check number of days of a year
 *
 * @param {number} year
 */
export function daysInYear(year) {
	return isLeapYear(year) ? 366 : 365;
}

/** Get current day of year
 * @param {Date} now
 * @param {Date} start
 */
export function dayOfYear(now, start) {
	const diff =
		now -
		start +
		(start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
	const oneDay = 1000 * 60 * 60 * 24;
	const dayOfYear = Math.floor(diff / oneDay);

	return dayOfYear;
}

/** Get year progress */
export function getYearProgress() {
	const date = new Date();
	const currentYear = date.getFullYear();
	const currentDay = dayOfYear(date, new Date(date.getFullYear(), 0, 0));
	const numOfDays = daysInYear(currentYear);
	const progressPercentage =
		((currentDay + getDayProgress() / 100) / numOfDays) * 100;

	return progressPercentage;
}
