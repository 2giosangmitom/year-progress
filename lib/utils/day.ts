import { getHourProgress } from "./hour";

/**
 * Get the progress of the current day in percentage.
 * @returns The progress of the current day in percentage.
 */
export function getDayProgress(): number {
  const now: Date = new Date();
  const currentHour: number = now.getHours();
  const progressPercentage: number = ((currentHour + getHourProgress() / 100) / 24) * 100;

  return progressPercentage;
}
