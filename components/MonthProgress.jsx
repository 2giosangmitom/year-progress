"use client";
import { getMonthProgress } from "@/utils/month";
import { useRef, useEffect } from "react";

export default function MonthProgress() {
	const monthProgressRef = useRef(null);

	useEffect(() => {
		monthProgressRef.current.style.width = getMonthProgress();
	}, []);

	return (
		<div>
			<p>Month progress: {getMonthProgress()}</p>
			<div className="bg-black w-full h-2">
				<div
					className="bg-yellow-700 h-full w-0 duration-1000"
					ref={monthProgressRef}
				/>
			</div>
		</div>
	);
}
