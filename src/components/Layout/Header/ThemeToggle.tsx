'use client'
import { Icon } from "@iconify/react/dist/iconify.js";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      type="button"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-dark_black/15 bg-white/80 text-dark_black shadow-sm transition-colors hover:bg-white dark:border-white/25 dark:bg-white/10 dark:text-amber-200 dark:shadow-none dark:hover:bg-white/15"
    >
      <span className="group-hover:rotate-180 transition-transform duration-700 ease-in-out">
        <Icon
          icon="ri:sun-fill"
          width="22"
          height="22"
          className="hidden text-amber-300 dark:block"
          aria-hidden
        />
        <Icon
          icon="ri:moon-fill"
          width="22"
          height="22"
          className="text-dark_black dark:hidden"
          aria-hidden
        />
      </span>
    </button>
  );
};

export default ThemeToggler;
