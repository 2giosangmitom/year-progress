import { dayOfYear } from "@/lib/utils/year";
import { describe, expect, it } from "@jest/globals";

describe("dayOfYear function", () => {
  it("returns 5 for 5th January 2024", () => {
    const now: Date = new Date(2024, 0, 5); // 5th January 2024
    expect(dayOfYear(now)).toBe(5);
  });

  it("returns 60 for 29th February 2024 (leap year)", () => {
    const now: Date = new Date(2024, 1, 29); // 29th February 2024 (leap year)
    expect(dayOfYear(now)).toBe(60);
  });

  it("returns 81 for 22nd March 2022", () => {
    const now: Date = new Date(2022, 2, 22); // 22nd March 2022
    expect(dayOfYear(now)).toBe(81);
  });
});
