import { daysInYear } from "~/lib/utils/year";
import { describe, expect, it } from "vitest";

describe("daysInYear function", () => {
  it("returns 366 for the year 2000 (leap year divisible by 400)", () => {
    expect(daysInYear(2000)).toEqual(366);
  });

  it("returns 365 for the year 1900 (non-leap year divisible by 100 but not by 400)", () => {
    expect(daysInYear(1900)).toEqual(365);
  });

  it("returns 365 for the year 2100 (non-leap year not divisible by 400)", () => {
    expect(daysInYear(2100)).toEqual(365);
  });

  it("returns 365 for the year 2001 (non-leap year)", () => {
    expect(daysInYear(2001)).toEqual(365);
  });

  it("throws an error for negative year values", () => {
    expect(() => daysInYear(-2022)).toThrowError("Year cannot be negative");
  });

  it("throws an error for non-integer year values", () => {
    expect(() => daysInYear(2022.5)).toThrowError("Year must be an integer");
  });
});
