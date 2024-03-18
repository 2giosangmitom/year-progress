import ThemeContextProvider from "@/context/ThemeContext";
import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import { type ReactNode } from "react";
import "./globals.css";

const font = Fira_Code({ subsets: ["latin"], weight: "600" });

export const metadata: Metadata = {
  title: "Year progress",
  description: "Year progress, made with Next.js and Tailwind",
  metadataBase: new URL("https://pheloiprogress.vercel.app/"),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <ThemeContextProvider>
        <body
          className={[
            font.className,
            "xl:px-20 lg:px-16 md:px-10 sm:px-5 px-4 bg-zinc-300 dark:bg-stone-950 dark:text-slate-50 transition",
          ].join(" ")}
        >
          {children}
        </body>
      </ThemeContextProvider>
    </html>
  );
}
