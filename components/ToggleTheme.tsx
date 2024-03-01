import { useTheme } from "@/context/ThemeContext";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

export default function ToggleTheme() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="fixed sm:bottom-10 sm:right-10 text-2xl outline-none bg-slate-100 rounded-full sm:p-5 active:scale-[0.9] transition shadow-sm dark:text-slate-50 dark:bg-slate-900 p-3 bottom-5 right-5"
    >
      {theme === "light" ? <BsSunFill /> : <FaMoon />}
    </button>
  );
}
