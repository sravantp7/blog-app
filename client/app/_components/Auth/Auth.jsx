"use client";

import Link from "next/link";
import styles from "./Auth.module.css";

export default function Auth() {
  const status = "authenticated";
  return (
    <>
      {status === "notauthenticated" ? (
        <>
          <Link href="/write">Write</Link>
          <span className={styles.logout}>Logout</span>
        </>
      ) : (
        <Link href={"/"}>Login</Link>
      )}
    </>
  );
}
