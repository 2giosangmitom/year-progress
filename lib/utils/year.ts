/**
 * Check if a given year is a leap year.
 * @param year - The year to check.
 * @returns Whether the year is a leap year.
 */
export function isLeapYear(year: number): boolean {
  if (year < 0) {
    throw new Error("Year cannot be negative");
  }
  if (!Number.isInteger(year)) {
    throw new Error("Year must be an integer");
  }
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * Get the number of days in a given year.
 * @param year - The year to get the number of days for.
 * @returns The number of days in the year (366 for leap year, 365 otherwise).
 */
export function daysInYear(year: number): 366 | 365 {
  if (year < 0) {
    throw new Error("Year cannot be negative");
  }
  if (!Number.isInteger(year)) {
    throw new Error("Year must be an integer");
  }
  return isLeapYear(year) ? 366 : 365;
}

/**
 * Get the day of the year for a given date.
 * @param date - The date to get the day of the year for.
 * @returns The day of the year (1-based).
 */
export function dayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diffInMilliseconds = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diffInMilliseconds / oneDay);
}

/**
 * Get the progress of the current year in percentage.
 * @returns The progress of the current year in percentage.
 */
export function getYearProgress(): number {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentDay = dayOfYear(now);
  const totalDays = daysInYear(currentYear);
  return ((currentDay + 1) / totalDays) * 100;
}
