import { describe, it, expect, vi } from "vitest";
import * as utils from "~/lib/utils";

describe("Progress Calculation", () => {
  it("should correctly calculate the progress of the current hour", () => {
    const mockDate = new Date(2023, 0, 1, 12, 30, 15, 500); // January 1, 2023 12:30:15.500
    vi.setSystemTime(mockDate);

    const progress = utils.getHourProgress();

    // Calculate the expected progress:
    // Here, we want to know how much of the current hour has passed.
    // In our mock time, it's 12:30:15.500, so we've completed 30 minutes, 15 seconds, and 500 milliseconds.
    // To calculate this as a fraction of an hour, we convert each unit to hours:
    // 30 minutes is 30/60 of an hour (because there are 60 minutes in an hour).
    // 15 seconds is 15/3600 of an hour (because there are 3600 seconds in an hour).
    // 500 milliseconds is 500/3600000 of an hour (because there are 3600000 milliseconds in an hour).
    // We sum up these fractions to get the total fraction of the hour passed.
    // Finally, we multiply by 100 to get a percentage.
    const expectedProgress = (30 / 60 + 15 / 3600 + 500 / 3600000) * 100;

    expect(progress).toBeCloseTo(expectedProgress, 5);
    vi.useRealTimers();
  });

  it("should correctly calculate the progress of the current day", () => {
    const mockDate = new Date(2023, 0, 1, 12, 30, 15, 500); // January 1, 2023 12:30:15.500
    vi.setSystemTime(mockDate);

    const dayProgress = utils.getDayProgress();

    // Calculate the expected day progress:
    // We start by figuring out how much of the current hour has passed.
    // For instance, if it's 12:30 PM, we've completed half of the hour.
    // We convert this into a fraction of the hour passed, then add it to the current hour.
    // Then, we take this combined hour fraction and divide it by 24 (since there are 24 hours in a day).
    // This gives us the fraction of the day that has passed.
    // Finally, we multiply by 100 to get a percentage.
    const hourProgress = utils.getHourProgress();
    const expectedDayProgress = ((12 + hourProgress / 100) / 24) * 100;

    expect(dayProgress).toBeCloseTo(expectedDayProgress, 5);

    vi.useRealTimers();
  });

  it("should correctly calculate the progress of the current month", () => {
    const mockDate = new Date(2023, 4, 15, 12, 30, 15, 500); // May 15, 2023 12:30:15.500
    vi.setSystemTime(mockDate);

    const monthProgress = utils.getMonthProgress();

    // Calculate the expected month progress:
    // First, we need to know how far we are into the month.
    // Since today is the 15th, we've already passed 14 days (we don't count today yet!).
    // Then, we check how far we've progressed within today.
    // By dividing the progress of today by 100, we get a fraction of the day we've covered.
    // We add this fraction to the number of days passed to get a combined fraction of the month we've covered.
    // Since May has 31 days, we divide this combined fraction by 31 and multiply by 100 to get a percentage.
    const dayProgress = utils.getDayProgress();
    const expectedMonthProgress = ((14 + dayProgress / 100) / 31) * 100;

    expect(monthProgress).toBeCloseTo(expectedMonthProgress, 5);
    vi.useRealTimers();
  });

  it("should correctly calculate the progress of a non-leap year", () => {
    const mockDate = new Date(2023, 2, 15); // March 15, 2023
    vi.setSystemTime(mockDate);

    const yearProgress = utils.getYearProgress();

    const currentDay = utils.dayOfYear(mockDate);
    const totalDays = utils.daysInYear(2023);
    const expectedYearProgress = (currentDay / totalDays) * 100;

    expect(yearProgress).toBeCloseTo(expectedYearProgress, 5);

    vi.useRealTimers();
  });

  it("should correctly calculate the progress of a leap year", () => {
    const mockDate = new Date(2024, 2, 15); // March 15, 2024 (leap year)
    vi.setSystemTime(mockDate);

    const yearProgress = utils.getYearProgress();

    const currentDay = utils.dayOfYear(mockDate);
    const totalDays = utils.daysInYear(2024);
    const expectedYearProgress = (currentDay / totalDays) * 100;

    expect(yearProgress).toBeCloseTo(expectedYearProgress, 5);

    vi.useRealTimers();
  });

  it("should correctly calculate the progress at the start of the year", () => {
    const mockDate = new Date(2023, 0, 1); // January 1, 2023
    vi.setSystemTime(mockDate);

    const yearProgress = utils.getYearProgress();

    const currentDay = utils.dayOfYear(mockDate);
    const totalDays = utils.daysInYear(2023);
    const expectedYearProgress = (currentDay / totalDays) * 100;

    expect(yearProgress).toBeCloseTo(expectedYearProgress, 5);

    vi.useRealTimers();
  });

  it("should correctly calculate the progress at the end of the year", () => {
    const mockDate = new Date(2023, 11, 31); // December 31, 2023
    vi.setSystemTime(mockDate);

    const yearProgress = utils.getYearProgress();

    const currentDay = utils.dayOfYear(mockDate);
    const totalDays = utils.daysInYear(2023);
    const expectedYearProgress = (currentDay / totalDays) * 100;

    expect(yearProgress).toBeCloseTo(expectedYearProgress, 5);

    vi.useRealTimers();
  });
});
