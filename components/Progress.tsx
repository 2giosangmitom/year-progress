import { useEffect, useRef } from "react";

export enum Title {
	Year = "Year progress",
	Month = "Month progress",
	Day = "Day progress",
	Hour = "Hour progress",
}

type props = {
	title: Title;
	progress: number;
	updateProgress: () => void;
};

export default function Progress({ title, progress, updateProgress }: props) {
	const progressRef = useRef<HTMLDivElement>(null);
	const requestRef = useRef<number | null>(null);

	const animate = () => {
		requestRef.current = requestAnimationFrame(animate);
		updateProgress();
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
			<p className="mb-2">
				{title}: {progress.toFixed(5)}%
			</p>
			<div className="border border-black shadow-lg w-full h-5 dark:border-slate-50">
				<div className="bg-slate-900 h-full w-0 duration-1000 dark:bg-stone-300" ref={progressRef} />
			</div>
		</div>
	);
}
