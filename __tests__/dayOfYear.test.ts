import { dayOfYear } from "@/lib/utils/year";
import { describe, expect, it } from "@jest/globals";

describe("test `dayOfYear`", () => {
	it("5/Jan is day 5 of 2024", () => {
		const now = new Date(2024, 0, 5); // 5 - January - 2024
		expect(dayOfYear(now)).toBe(5);
	});

	it("29/Feb is day 60 of 2024", () => {
		const now = new Date(2024, 1, 29); // 29 - February - 2024
		expect(dayOfYear(now)).toBe(60);
	});

	it("22/Mar is day 81 of 2022", () => {
		const now = new Date(2022, 2, 22); // 22 - March - 2024
		expect(dayOfYear(now)).toBe(81);
	});
});
