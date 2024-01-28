import YearProgress from "@/components/YearProgress";

export default function Home() {
	const date = new Date();

	return (
		<>
			<header>
				<h1>Year progress / {date.getUTCFullYear()}</h1>
			</header>
			<main>
				<YearProgress />
			</main>
		</>
	);
}
