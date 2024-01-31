import { getHourProgress } from "./hour";

/** Get day progress */
export function getDayProgress() {
	const now = new Date();
	const currentHour = now.getHours();
	const progressPercentage = ((currentHour + getHourProgress() / 100) / 24) * 100;

	return progressPercentage;
}
