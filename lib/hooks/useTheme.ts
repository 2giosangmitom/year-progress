import { ThemeContext, ThemeContextType } from "@/context/ThemeContext";
import { useContext } from "react";

/**
 * A custom hook to access the theme context.
 * @returns The current theme context.
 * @throws Will throw an error if used outside of a ThemeContextProvider.
 */
export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
}
