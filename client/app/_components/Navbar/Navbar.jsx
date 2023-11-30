import styles from "./Navbar.module.css";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Auth from "../Auth/Auth";

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <div className={styles.socials}>
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
      </div>
      <div className={styles.logo}>blog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
        <Auth />
      </div>
    </nav>
  );
}
