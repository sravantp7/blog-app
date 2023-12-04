"use client";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeProvider({ children }) {
  const { theme } = useContext(ThemeContext);
  return <div className={theme}>{children}</div>;
}
