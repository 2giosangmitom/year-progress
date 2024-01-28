"use client";
import { getYearProgress } from "@/utils/year";
import { useEffect, useRef, useState } from "react";

export default function YearProgress() {
	const yearProgressRef = useRef();
	const requestRef = useRef();
	const [progress, setProgress] = useState(0);

	const animate = () => {
		setProgress(getYearProgress());
		requestRef.current = requestAnimationFrame(animate);
		yearProgressRef.current.style.width = `${progress}%`;
	};

	useEffect(() => {
		requestRef.current = requestAnimationFrame(animate);
		return () => {
			cancelAnimationFrame(animate);
		};
	}, [animate]);

	return (
		<div className="xl:my-0 my-5">
			<p className="mb-2">Year progress: {progress.toFixed(5)}%</p>
			<div className="border border-black shadow-lg w-full h-5">
				<div
					className="bg-slate-900 h-full w-0 duration-1000"
					ref={yearProgressRef}
				/>
			</div>
		</div>
	);
}
