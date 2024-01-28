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
		<div className="xl:my-0 my-5">
			<p className="mb-2">Month progress: {progress.toFixed(5)}%</p>
			<div className="border border-black shadow-lg w-full h-5">
				<div
					className="bg-slate-900 h-full w-0 duration-1000"
					ref={monthProgressRef}
				/>
			</div>
		</div>
	);
}
