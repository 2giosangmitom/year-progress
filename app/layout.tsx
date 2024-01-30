import { Fira_Code } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import Providers from "@/lib/Providers";

const font = Fira_Code({ subsets: ["latin"], weight: "600" });

export const metadata: Metadata = {
	title: "Year progress",
	description: "Year progress, made with Next.js, Tailwind",
	metadataBase: new URL("https://pheloiprogress.vercel.app/"),
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<Providers>
			<html lang="en">
				<body className={[font.className, "xl:px-20", "lg:px-16", "md:px-10", "sm:px-5", "px-4 bg-zinc-300"].join(" ")}>
					{children}
				</body>
			</html>
		</Providers>
	);
}
