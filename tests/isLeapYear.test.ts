import { isLeapYear } from "~/lib/utils/year";
import { describe, expect, it } from "vitest";

describe("isLeapYear function", () => {
  const testCases = [
    { year: 2004, expected: true, description: "leap years divisible by 4 but not by 100 (e.g., 2004)" },
    { year: 2000, expected: true, description: "leap years divisible by 400 (e.g., 2000)" },
    { year: 2023, expected: false, description: "years not divisible by 4 (e.g., 2023)" },
    { year: 1900, expected: false, description: "years divisible by 100 but not by 400 (e.g., 1900)" },
    { year: 2022, expected: false, description: "non-leap years divisible by 4 (e.g., 2022)" },
  ];

  testCases.forEach(({ year, expected, description }) => {
    it(`returns ${expected} for ${description}`, () => {
      expect(isLeapYear(year)).toBe(expected);
    });
  });

  const errorTestCases = [
    { year: -2022, errorMessage: "Year cannot be negative", description: "negative year values" },
    { year: 2022.5, errorMessage: "Year must be an integer", description: "non-integer year values" },
  ];

  errorTestCases.forEach(({ year, errorMessage, description }) => {
    it(`throws an error for ${description}`, () => {
      expect(() => isLeapYear(year)).toThrowError(errorMessage);
    });
  });
});
