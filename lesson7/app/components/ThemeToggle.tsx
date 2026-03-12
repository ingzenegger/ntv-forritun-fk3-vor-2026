import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../root";

type Theme = "light" | "dark" | string;
// type ThemeState = { theme: string; setThemeState: () => void };

function getInitialTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
}
// type Theme2 = { theme: string; setThemeState: () => void };
export function ThemeToggle() {
  const { theme, setThemeState } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setThemeState(getInitialTheme());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    applyTheme(theme);
  }, [theme, mounted]);

  const toggle = () => {
    setThemeState((t) => (t === "light" ? "dark" : "light"));
  };

  if (!mounted) {
    return (
      <div className="theme-toggle" aria-hidden>
        Toggle theme
      </div>
    );
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
