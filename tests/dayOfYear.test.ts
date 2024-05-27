import { dayOfYear } from "~/lib/utils/year";
import { describe, expect, it } from "vitest";

describe("dayOfYear function", () => {
  const testCases = [
    { date: new Date(2024, 0, 5), expected: 5, description: "5th January 2024" },
    { date: new Date(2024, 1, 29), expected: 60, description: "29th February 2024 (leap year)" },
    { date: new Date(2022, 2, 22), expected: 81, description: "22nd March 2022" },
  ];

  testCases.forEach(({ date, expected, description }) => {
    it(`returns ${expected} for ${description}`, () => {
      expect(dayOfYear(date)).toBe(expected);
    });
  });
});
