"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({});

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("");

  function toggleTheme() {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  }

  useEffect(() => {
    const currentTheme = window.matchMedia("(prefers-color-scheme: light)"); // fetching current browser theme
    const value = window.localStorage.getItem("theme"); // fetching theme value from localstorage

    if (!value) {
      currentTheme?.matches
        ? window.localStorage.setItem("theme", "light")
        : window.localStorage.setItem("theme", "dark");
    }
    setTheme(window.localStorage.getItem("theme"));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
