import { getDayProgress } from "./day";

/**
 * Get the progress of the current month in percentage.
 * @returns The progress of the current month in percentage.
 */
export function getMonthProgress(): number {
  const now: Date = new Date();
  const totalDaysOfMonth: number = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
  const progressPercentage: number = ((now.getDate() - 1 + getDayProgress() / 100) / totalDaysOfMonth) * 100;

  return progressPercentage;
}
