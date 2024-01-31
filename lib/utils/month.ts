/** Get month progress */
export function getMonthProgress() {
	const now = new Date();
	const currentDay = now.getDate();
	const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
	const progressPercentage = (currentDay / lastDayOfMonth) * 100;

	return progressPercentage;
}
