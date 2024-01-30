import { daysInYear } from "@/lib/utils/year";
import { describe, expect, it } from "@jest/globals";

describe("test `daysInYear`", () => {
	it("days of 2024 to equal 366", () => {
		expect(daysInYear(2024)).toEqual(366);
	});

	it("days of 2023 to equal 365", () => {
		expect(daysInYear(2023)).toEqual(365);
	});
});
