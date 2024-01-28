export function getHourProgress() {
	const date = new Date();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds() / 60;
	const miliseconds = date.getMilliseconds() / 1000 / 60;
	return ((minutes + seconds + miliseconds) * 100) / 60;
}
