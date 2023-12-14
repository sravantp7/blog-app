import styles from "./Navbar.module.css";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Auth from "../Auth/Auth";

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <section className={styles.socials}>
        <SocialIcon
          network="facebook"
          style={{ width: "24px", height: "24px" }}
        />
        <SocialIcon
          network="twitter"
          style={{ width: "24px", height: "24px" }}
        />
        <SocialIcon
          network="instagram"
          style={{ width: "24px", height: "24px" }}
        />
        <SocialIcon
          network="youtube"
          style={{ width: "24px", height: "24px" }}
        />
      </section>
      <section className={styles.logo}>
        <Link href="/">Blog</Link>
      </section>
      <section className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact
        </Link>
        <Link href="/about" className={styles.link}>
          About
        </Link>
        <Auth />
      </section>
    </nav>
  );
}
