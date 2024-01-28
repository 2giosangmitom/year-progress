"use client";
import { useEffect, useRef } from "react";
import { getYearProgress } from "@/utils/year";

export default function YearProgress() {
	const yearProgressRef = useRef();

	useEffect(() => {
		yearProgressRef.current.style.width = getYearProgress();
	}, []);

	return (
		<div>
			<p>Year progress: {getYearProgress()}</p>
			<div className="bg-black w-full h-2">
				<div
					className="bg-yellow-700 h-full w-0 duration-1000"
					ref={yearProgressRef}
				/>
			</div>
		</div>
	);
}
