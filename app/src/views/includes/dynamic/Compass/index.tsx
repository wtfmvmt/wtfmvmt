import { useEffect, useState } from "react";

export default function Compass({ }) {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

    const handleClick = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);
    return (
        <div className="container flex m-auto fixed bottom-4 right-2 h-48 rounded-full bg-purple cursor-pointer">
            <button onClick={handleClick}>{theme === "light" ? "🌙" : "🌞"}</button>

        </div>

    )
}