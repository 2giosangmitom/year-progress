import DayProgress from "@/components/DayProgress";
import HourProgress from "@/components/HourProgress";
import MonthProgress from "@/components/MonthProgress";
import YearProgress from "@/components/YearProgress";

export default function Home() {
	const date = new Date();
	const month = date.toLocaleString("default", { month: "long" });
	const year = date.getFullYear();

	return (
		<>
			<header className="sm:mt-5 mt-4">
				<h1 className="xl:text-2xl xl:font-bold sm:text-lg">
					Year progress - {month} / {year}
				</h1>
			</header>

			<main className="xl:grid xl:grid-cols-2 gap-4 mt-5">
				<YearProgress />
				<MonthProgress />
				<DayProgress />
				<HourProgress />
			</main>
		</>
	);
}
