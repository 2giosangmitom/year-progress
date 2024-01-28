"use client";
import { getMonthProgress } from "@/utils/month";
import { useRef, useEffect, useState } from "react";

export default function MonthProgress() {
	const monthProgressRef = useRef();
	const [progress, setProgress] = useState(0);
	const requestRef = useRef();

	const animate = () => {
		setProgress(getMonthProgress());
		requestRef.current = requestAnimationFrame(animate);
		monthProgressRef.current.style.width = `${progress}%`;
	};

	useEffect(() => {
		requestRef.current = requestAnimationFrame(animate);
		return () => {
			cancelAnimationFrame(animate);
		};
	}, [animate]);

	return (
		<div>
			<p>Month progress: {progress.toFixed(5)}%</p>
			<div className="bg-black w-full h-2">
				<div
					className="bg-yellow-700 h-full w-0 duration-1000"
					ref={monthProgressRef}
				/>
			</div>
		</div>
	);
}
