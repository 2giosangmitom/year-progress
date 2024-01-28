import { describe, expect, it } from "@jest/globals";
import { dayOfYear } from "../utils/year";

describe("test `dayOfYear`", () => {
	it("5/Jan is day 5 of 2024", () => {
		const now = new Date(2024, 0, 5); // 5 - January - 2024
		const start = new Date(now.getFullYear(), 0, 0);
		expect(dayOfYear(now, start)).toBe(5);
	});
});
