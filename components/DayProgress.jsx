"use client";
import { getDayProgress } from "@/utils/day";
import { useEffect, useRef, useState } from "react";

export default function DayProgress() {
	const dayProgressRef = useRef();
	const [progress, setProgress] = useState(0);
	const requestRef = useRef();

	const animate = () => {
		setProgress(getDayProgress());
		requestRef.current = requestAnimationFrame(animate);
		dayProgressRef.current.style.width = `${progress}%`;
	};

	useEffect(() => {
		requestRef.current = requestAnimationFrame(animate);
		return () => {
			cancelAnimationFrame(animate);
		};
	}, [animate]);

	return (
		<div className="xl:my-0 my-5">
			<p className="mb-2">Day progress: {progress.toFixed(5)}%</p>
			<div className="border border-black shadow-lg w-full h-5">
				<div
					className="bg-slate-900 h-full w-0 duration-1000"
					ref={dayProgressRef}
				/>
			</div>
		</div>
	);
}
