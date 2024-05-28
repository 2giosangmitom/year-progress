import { daysInYear } from "~/lib/utils/year";
import { describe, expect, it } from "vitest";

describe("daysInYear function", () => {
  const testCases = [
    { year: 2000, expected: 366, description: "the year 2000 (leap year divisible by 400)" },
    { year: 1900, expected: 365, description: "the year 1900 (non-leap year divisible by 100 but not by 400)" },
    { year: 2100, expected: 365, description: "the year 2100 (non-leap year not divisible by 400)" },
    { year: 2001, expected: 365, description: "the year 2001 (non-leap year)" },
  ];

  testCases.forEach(({ year, expected, description }) => {
    it(`returns ${expected} for ${description}`, () => {
      expect(daysInYear(year)).toEqual(expected);
    });
  });

  const errorTestCases = [
    { year: -2022, errorMessage: "Year cannot be negative", description: "negative year values" },
    { year: 2022.5, errorMessage: "Year must be an integer", description: "non-integer year values" },
  ];

  errorTestCases.forEach(({ year, errorMessage, description }) => {
    it(`throws an error for ${description}`, () => {
      expect(() => daysInYear(year)).toThrowError(errorMessage);
    });
  });
});
