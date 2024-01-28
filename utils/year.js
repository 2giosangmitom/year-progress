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

/** Get current day of year */
export function dayOfYear() {
	const now = new Date();
	const start = new Date(now.getFullYear(), 0, 0);
	const diff =
		now -
		start +
		(start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
	const oneDay = 1000 * 60 * 60 * 24;
	const dayOfYear = Math.floor(diff / oneDay);
	return dayOfYear;
}

export function getYearProgress(day, numOfDays) {
	return `${((day / numOfDays) * 100).toFixed(2)}%`;
}
