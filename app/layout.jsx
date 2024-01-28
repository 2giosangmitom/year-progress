import { Fira_Code } from "next/font/google";
import "./globals.css";

const font = Fira_Code({ subsets: ["latin"], weight: "600" });

/** @type {import("next").Metadata} */
export const metadata = {
	title: "Year progress",
	description: "Year progress, made with Next.js, Tailwind",
	metadataBase: new URL("https://pheloiprogress.vercel.app/"),
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={[
					font.className,
					"xl:px-20",
					"lg:px-16",
					"md:px-10",
					"sm:px-5",
					"px-4 bg-zinc-300",
				].join(" ")}
			>
				{children}
			</body>
		</html>
	);
}
