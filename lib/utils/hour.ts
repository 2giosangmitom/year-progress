/**
 * Get the progress of the current hour in percentage.
 * @returns The progress of the current hour in percentage.
 */
export function getHourProgress(): number {
  const now: Date = new Date();
  const currentMinute: number = now.getMinutes();
  const currentSecond: number = now.getSeconds();
  const currentMillisecond: number = now.getMilliseconds();
  const totalMinutes: number = currentMinute + currentSecond / 60 + currentMillisecond / 60000;
  const progressPercentage: number = (totalMinutes / 60) * 100;

  return progressPercentage;
}
