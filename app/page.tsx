"use client";
import Header from "@/components/Header";
import Progress, { Title } from "@/components/Progress";
import useProgressStore from "@/lib/hooks/useProgressStore";
import { update } from "@/lib/slices/progressSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
	const { yearProgress, monthProgress, dayProgress, hourProgress } = useProgressStore();
	const dispatch = useDispatch();

	useEffect(() => {
		const updateProgress = setInterval(() => {
			dispatch(update());
		}, 100);

		return () => {
			clearInterval(updateProgress);
		};
	}, [dispatch]);

	return (
		<>
			<Header />

			<main className="xl:grid xl:grid-cols-2 gap-4 mt-5">
				<Progress title={Title.year} progress={yearProgress} />
				<Progress title={Title.month} progress={monthProgress} />
				<Progress title={Title.day} progress={dayProgress} />
				<Progress title={Title.hour} progress={hourProgress} />
			</main>
		</>
	);
}
