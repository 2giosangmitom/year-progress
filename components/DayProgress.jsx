"use client";
import { useRef, useEffect } from "react";
import { getDayProgress } from "@/utils/day";

export default function DayProgress() {
	const dayProgressRef = useRef();

	useEffect(() => {
		dayProgressRef.current.style.width = getDayProgress();
	}, []);

	return (
		<div>
			<p>Day progress: {getDayProgress()}</p>
			<div className="bg-black w-full h-2">
				<div
					className="bg-yellow-700 h-full w-0 duration-1000"
					ref={dayProgressRef}
				/>
			</div>
		</div>
	);
}
