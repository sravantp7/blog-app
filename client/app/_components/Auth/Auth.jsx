"use client";

import Link from "next/link";
import styles from "./Auth.module.css";
import { useState } from "react";

export default function Auth() {
  const status = "notauthenticated";
  const [open, setOpen] = useState(false);

  return (
    <>
      {status === "authenticated" ? (
        <div className={styles.box}>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={`${styles.logout} ${styles.link}`}>Logout</span>
        </div>
      ) : (
        <Link href={"/"} className={styles.link}>
          Login
        </Link>
      )}

      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {/* this will open up the burger menu */}
      {open && (
        <div className={styles.menu}>
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>

          {status === "notauthenticated" ? (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.logout}>Logout</span>
            </>
          ) : (
            <Link href={"/"}>Login</Link>
          )}
        </div>
      )}
    </>
  );
}
