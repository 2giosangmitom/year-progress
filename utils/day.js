import { getHourProgress } from "./hour";

export function getDayProgress() {
	const date = new Date();
	const hours = date.getHours();
	return ((hours + getHourProgress() / 60) / 24) * 100;
}
