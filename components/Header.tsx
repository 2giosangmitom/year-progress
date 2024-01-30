export default function Header() {
	const date = new Date();
	const month = date.toLocaleString("default", { month: "long" });
	const year = date.getFullYear();

	return (
		<header className="sm:mt-5 mt-4">
			<h1 className="xl:text-2xl xl:font-bold text-lg font-semibold">
				Year progress - {month} / {year}
			</h1>
		</header>
	);
}
