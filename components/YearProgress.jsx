"use client";
import { useEffect, useRef, useState } from "react";
import { getYearProgress } from "@/utils/year";

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
		<div>
			<p>Year progress: {progress.toFixed(5)}%</p>
			<div className="bg-black w-full h-2">
				<div
					className="bg-yellow-700 h-full w-0 duration-1000"
					ref={yearProgressRef}
				/>
			</div>
		</div>
	);
}
