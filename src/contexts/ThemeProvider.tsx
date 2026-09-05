import { useState } from "react";
import { ThemeContext, type ThemeName } from "./ThemeContext.ts";

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {

    const [theme, setTheme] = useState<ThemeName>(() => {
        const savedTheme = localStorage.getItem("theme");

        return savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark";
    });

    const toggleTheme = () => {
        setTheme(prev => {
            const nextTheme = prev === "dark" ? "light" : "dark";

            localStorage.setItem("theme", nextTheme);
            return nextTheme;
        });
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
};
