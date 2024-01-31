import DayProgress from "@/components/DayProgress";
import Header from "@/components/Header";
import HourProgress from "@/components/HourProgress";
import MonthProgress from "@/components/MonthProgress";
import YearProgress from "@/components/YearProgress";

export default function Home() {
	return (
		<>
			<Header />
			<main className="xl:grid xl:grid-cols-2 gap-4 mt-5">
				<YearProgress />
				<MonthProgress />
				<DayProgress />
				<HourProgress />
			</main>
		</>
	);
}
