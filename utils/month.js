import { getDayProgress } from "./day";

export function daysInMonth(year, month) {
	return new Date(year, month, 0).getDate();
}

export function getMonthProgress() {
	const date = new Date();
	const currentDay = date.getDate();
	const currentYear = date.getFullYear();
	const currentMonth = date.getMonth() + 1;
	const days = daysInMonth(currentYear, currentMonth);
	const progressPercentage =
		((currentDay + getDayProgress() / 100) / days) * 100;

	return progressPercentage;
}
