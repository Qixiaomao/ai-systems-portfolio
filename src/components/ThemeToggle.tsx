"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

const changeEvent = "portfolio-theme-change";

function subscribe(onChange: () => void) {
  function onStorage(event: StorageEvent) {
    if (event.key !== "portfolio-theme" && event.key !== null) return;
    document.documentElement.dataset.theme =
      event.newValue === "dark" ? "dark" : "light";
    onChange();
  }

  window.addEventListener(changeEvent, onChange);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(changeEvent, onChange);
    window.removeEventListener("storage", onStorage);
  };
}

function getTheme() {
  return document.documentElement.dataset.theme === "dark";
}

function getServerTheme() {
  return false;
}

export function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getTheme, getServerTheme);
  const label = `Switch to ${isDark ? "light" : "dark"} theme`;

  function toggleTheme() {
    const theme = isDark ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem("portfolio-theme", theme);
    } catch {
      // The toggle still works when browser storage is unavailable.
    }
    window.dispatchEvent(new Event(changeEvent));
  }

  return (
    <button
      className="sun"
      type="button"
      aria-label={label}
      aria-pressed={isDark}
      title={label}
      onClick={toggleTheme}
    >
      {isDark ? <Moon aria-hidden="true" /> : <Sun aria-hidden="true" />}
    </button>
  );
}
