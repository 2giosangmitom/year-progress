"use client";
import { useEffect, useRef } from "react";
import { dayOfYear, daysInYear, getYearProgress } from "@/utils/year";

export default function YearProgress() {
	const date = new Date();
	const yearProgressRef = useRef(null);

	useEffect(() => {
		yearProgressRef.current.style.width = getYearProgress(
			dayOfYear(),
			daysInYear(date.getUTCFullYear()),
		);
	}, [date]);

	return (
		<div>
			<p>Year progress: {getYearProgress(dayOfYear(), daysInYear())}</p>
			<div className="bg-black w-full h-2">
				<div
					className="bg-yellow-700 h-full w-0 duration-1000"
					ref={yearProgressRef}
				/>
			</div>
		</div>
	);
}
