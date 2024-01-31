"use client";
import { getMonthProgress } from "@/lib/utils/month";
import { useEffect, useRef, useState } from "react";

export default function MonthProgress() {
	const progressRef = useRef<HTMLDivElement>(null);
	const requestRef = useRef<number | null>(null);
	const [progress, setProgress] = useState(0);

	const animate = () => {
		requestRef.current = requestAnimationFrame(animate);
		setProgress(getMonthProgress());
		if (progressRef.current != null) {
			progressRef.current.style.width = `${progress}%`;
		}
	};

	useEffect(() => {
		requestRef.current = requestAnimationFrame(animate);
		return () => {
			if (requestRef.current != null) {
				cancelAnimationFrame(requestRef.current);
			}
		};
	}, [animate]);

	return (
		<div className="xl:my-0 my-5">
			<p className="mb-2">Month progress: {progress.toFixed(5)}%</p>
			<div className="border border-black shadow-lg w-full h-5">
				<div className="bg-slate-900 h-full w-0 duration-1000" ref={progressRef} />
			</div>
		</div>
	);
}
