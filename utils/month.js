export function daysInMonth(year, month) {
	return new Date(year, month, 0).getDate();
}

export function getMonthProgress() {
	const date = new Date();
	const day = date.getUTCDate();
	const currentYear = date.getUTCFullYear();
	const currentMonth = date.getUTCMonth() + 1;
	const days = daysInMonth(currentYear, currentMonth);

	return `${((day / days) * 100).toFixed(2)}%`;
}
