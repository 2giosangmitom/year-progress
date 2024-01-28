"use client";
import { useEffect, useRef } from "react";

/**
 * Check leap year
 *
 * @param {number} year
 */
function isLeapYear(year) {
	return (year % 100 === 0 && year % 400 === 0) || year % 4 === 0
		? true
		: false;
}

/**
 * Check number of days of a year
 *
 * @param {number} year
 */
function numOfDays(year) {
	return isLeapYear(year) ? 366 : 365;
}

/**
 * Get current day of year
 */
function dayOfYear() {
	const now = new Date();
	const start = new Date(now.getFullYear(), 0, 0);
	const diff =
		now -
		start +
		(start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
	const oneDay = 1000 * 60 * 60 * 24;
	const dayOfYear = Math.floor(diff / oneDay);
	return dayOfYear;
}

/** Get year progress */
function getYearProgress(day, numOfDays) {
	return `${((day / numOfDays) * 100).toFixed(2)}%`;
}

export default function YearProgress() {
	const date = new Date();
	const yearProgressRef = useRef(null);

	useEffect(() => {
		yearProgressRef.current.style.width = getYearProgress(
			dayOfYear(),
			numOfDays(date.getUTCFullYear()),
		);
	}, [date]);

	return (
		<div>
			<p>Year progress: {getYearProgress(dayOfYear(), numOfDays())}</p>
			<div className="bg-black w-full h-2">
				<div
					className="bg-yellow-700 h-full w-0 duration-1000"
					ref={yearProgressRef}
				/>
			</div>
		</div>
	);
}
