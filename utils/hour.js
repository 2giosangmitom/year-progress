export function getHourProgress() {
	const date = new Date();
	const currentMinute = date.getMinutes();
	const currentSecond = date.getSeconds();
	const currentMillisecond = date.getMilliseconds();
	const totalMinutes =
		currentMinute + currentSecond / 60 + currentMillisecond / 60000;
	const progressPercentage = (totalMinutes / 60) * 100;

	return progressPercentage;
}
