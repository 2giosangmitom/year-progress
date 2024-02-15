"use client";
import Header from "@/components/Header";
import Progress, { Title } from "@/components/Progress";
import ToggleTheme from "@/components/ToggleTheme";
import { getDayProgress } from "@/lib/utils/day";
import { getHourProgress } from "@/lib/utils/hour";
import { getMonthProgress } from "@/lib/utils/month";
import { getYearProgress } from "@/lib/utils/year";
import { useState } from "react";

export default function Home() {
	const [yearProgress, setYearProgress] = useState(0);
	const [monthProgress, setMonthProgress] = useState(0);
	const [dayProgress, setDayProgress] = useState(0);
	const [hourProgress, setHourProgress] = useState(0);

	return (
		<>
			<Header />
			<main className="xl:grid xl:grid-cols-2 gap-4 mt-5">
				<Progress
					title={Title.Year}
					progress={yearProgress}
					updateProgress={() => setYearProgress(getYearProgress())}
				/>
				<Progress
					title={Title.Month}
					progress={monthProgress}
					updateProgress={() => setMonthProgress(getMonthProgress())}
				/>
				<Progress title={Title.Day} progress={dayProgress} updateProgress={() => setDayProgress(getDayProgress())} />
				<Progress
					title={Title.Hour}
					progress={hourProgress}
					updateProgress={() => setHourProgress(getHourProgress())}
				/>
			</main>
			<ToggleTheme />
		</>
	);
}
