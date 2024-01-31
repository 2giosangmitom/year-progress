import { getDayProgress } from "./day";

/** Get month progress */
export function getMonthProgress() {
	const now = new Date();
	const totalDaysOfMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
	const progressPercentage = ((now.getDate() - 1 + getDayProgress() / 100) / totalDaysOfMonth) * 100;

	return progressPercentage;
}
