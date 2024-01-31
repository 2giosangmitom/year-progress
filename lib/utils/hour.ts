/** Get hour progress */
export function getHourProgress() {
	const now = new Date();
	const currentMinute = now.getMinutes();
	const currentSecond = now.getSeconds();
	const currentMillisecond = now.getMilliseconds();
	const totalMinutes = currentMinute + currentSecond / 60 + currentMillisecond / 60000;
	const progressPercentage = (totalMinutes / 60) * 100;

	return progressPercentage;
}
