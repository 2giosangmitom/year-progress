import { getHourProgress } from "./hour";

export function getDayProgress() {
	const date = new Date();
	const currentHour = date.getHours();
	const progressPercentage = ((currentHour + getHourProgress() / 100) / 24) * 100;

	return progressPercentage;
}
