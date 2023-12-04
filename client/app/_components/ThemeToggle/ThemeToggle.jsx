"use client";

import styles from "./ThemeToggle.module.css";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "@/app/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      onClick={toggleTheme}
      style={
        theme === "dark"
          ? { background: "white" }
          : { right: "1px", background: "black" }
      }
    >
      <Image src={"/sun.png"} alt="sun" width={14} height={14} />
      <div
        className={styles.circle}
        style={
          theme === "dark"
            ? { left: "1px", background: "#0f172a" }
            : { right: "1px", background: "white" }
        }
      ></div>
      <Image src={"/moon.png"} alt="moon" width={14} height={14} />
    </div>
  );
}
