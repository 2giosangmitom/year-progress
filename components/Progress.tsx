"use client";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { update } from "@/lib/slices/progressSlice";

export enum Title {
	year = "Year progress",
	month = "Month progress",
	day = "Day progress",
	hour = "Hour progress",
}

export default function Progress({
	title,
	progress,
}: {
	title: Title;
	progress: number;
}) {
	const progressRef = useRef<HTMLDivElement>(null);
	const requestRef = useRef<number | null>(null);
	const dispatch = useDispatch();

	const animate = () => {
		dispatch(update());
		requestRef.current = requestAnimationFrame(animate);
	};

	useEffect(() => {
		if (!progressRef.current) {
			throw new Error("Error");
		}
		requestRef.current = requestAnimationFrame(animate);
		progressRef.current.style.width = `${progress}%`;
		return () => {
			if (requestRef.current !== null) {
				cancelAnimationFrame(requestRef.current);
			}
		};
	}, [animate, progress]);

	return (
		<div className="xl:my-0 my-5">
			<p className="mb-2">
				{title}: {progress.toFixed(5)}%
			</p>
			<div className="border border-black shadow-lg w-full h-5">
				<div className="bg-slate-900 h-full w-0 duration-1000" ref={progressRef} />
			</div>
		</div>
	);
}
