import { describe, expect, it } from "@jest/globals";
import { isLeapYear } from "@/lib/utils/year";

describe("test `isLeapYear`", () => {
	it("isLeapYear(2024) must return true", () => {
		expect(isLeapYear(2024)).toBeTruthy();
	});

	it("isLeapYear(2004) must return true", () => {
		expect(isLeapYear(2004)).toBeTruthy();
	});

	it("isLeapYear(2008) must return true", () => {
		expect(isLeapYear(2008)).toBeTruthy();
	});

	it("isLeapYear(2020) must return true", () => {
		expect(isLeapYear(2020)).toBeTruthy();
	});

	it("isLeapYear(2023) must return false", () => {
		expect(isLeapYear(2023)).toBeFalsy();
	});

	it("isLeapYear(2022) must return false", () => {
		expect(isLeapYear(2022)).toBeFalsy();
	});
});
