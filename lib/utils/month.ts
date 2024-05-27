import { getDayProgress } from "./day";

/**
 * Get the progress of the current month in percentage.
 * @returns The progress of the current month in percentage.
 */
export function getMonthProgress(): number {
  const now: Date = new Date();
  const currentMonth: number = now.getMonth() + 1;
  const totalDaysOfMonth: number = new Date(now.getFullYear(), currentMonth, 0).getDate();

  const progressPercentage: number = ((now.getDate() - 1 + getDayProgress() / 100) / totalDaysOfMonth) * 100;
  return progressPercentage;
}
