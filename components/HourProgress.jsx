"use client";
import { getHourProgress } from "@/utils/hour";
import { useEffect, useRef, useState } from "react";

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
		<div className="xl:my-0 my-5">
			<p className="mb-2">Hour progress: {progress.toFixed(5)}%</p>
			<div className="border border-black shadow-lg w-full h-5">
				<div
					className="bg-slate-900 h-full w-0 duration-1000"
					ref={hourProgressRef}
				/>
			</div>
		</div>
	);
}
