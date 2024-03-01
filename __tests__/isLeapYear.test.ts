import { isLeapYear } from "@/lib/utils/year";
import { describe, expect, it } from "@jest/globals";

describe("isLeapYear function", () => {
  it("returns true for leap years divisible by 4 but not by 100 (e.g., 2004)", () => {
    expect(isLeapYear(2004)).toBeTruthy();
  });

  it("returns true for leap years divisible by 400 (e.g., 2000)", () => {
    expect(isLeapYear(2000)).toBeTruthy();
  });

  it("returns false for years not divisible by 4 (e.g., 2023)", () => {
    expect(isLeapYear(2023)).toBeFalsy();
  });

  it("returns false for years divisible by 100 but not by 400 (e.g., 1900)", () => {
    expect(isLeapYear(1900)).toBeFalsy();
  });

  it("returns false for non-leap years divisible by 4 (e.g., 2022)", () => {
    expect(isLeapYear(2022)).toBeFalsy();
  });

  it("throws an error for negative year values", () => {
    expect(() => isLeapYear(-2022)).toThrowError("Year cannot be negative");
  });

  it("throws an error for non-integer year values", () => {
    expect(() => isLeapYear(2022.5)).toThrowError("Year must be an integer");
  });
});
