import YearProgress from "@/components/YearProgress";
import MonthProgress from "@/components/MonthProgress";
import HourProgress from "@/components/HourProgress";
import DayProgress from "@/components/DayProgress";

export default function Home() {
	const date = new Date();
	const month = date.toLocaleString("default", { month: "long" });
	const year = date.getUTCFullYear();

	return (
		<>
			<header>
				<h1>
					Year progress - {month} / {year}
				</h1>
			</header>

			<main>
				<YearProgress />
				<MonthProgress />
				<DayProgress />
				<HourProgress />
			</main>
		</>
	);
}
