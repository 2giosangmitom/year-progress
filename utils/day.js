export function getDayProgress() {
	const date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	return `${(((hours + minutes / 60) / 24) * 100).toFixed(2)}%`;
}
