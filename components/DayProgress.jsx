"use client";
import { useRef, useEffect, useState } from "react";
import { getDayProgress } from "@/utils/day";

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
		<div>
			<p>Day progress: {progress.toFixed(5)}%</p>
			<div className="bg-black w-full h-2">
				<div
					className="bg-yellow-700 h-full w-0 duration-1000"
					ref={dayProgressRef}
				/>
			</div>
		</div>
	);
}
