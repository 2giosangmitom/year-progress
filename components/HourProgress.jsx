"use client";
import { useRef, useEffect, useState } from "react";
import { getHourProgress } from "@/utils/hour";

export default function HourProgress() {
	const hourProgressRef = useRef();
	const [progress, setProgress] = useState(0);
	const requestRef = useRef();

	const animate = () => {
		setProgress(getHourProgress());
		requestRef.current = requestAnimationFrame(animate);
		hourProgressRef.current.style.width = `${progress}%`;
	};

	useEffect(() => {
		requestRef.current = requestAnimationFrame(animate);
		return () => {
			cancelAnimationFrame(animate);
		};
	}, [animate]);

	return (
		<div>
			<p>Hour progress: {progress.toFixed(5)}%</p>
			<div className="bg-black w-full h-2">
				<div
					className="bg-yellow-700 h-full w-0 duration-1000"
					ref={hourProgressRef}
				/>
			</div>
		</div>
	);
}
