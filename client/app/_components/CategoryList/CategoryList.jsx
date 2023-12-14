import styles from "./CategoryList.module.css";
import Link from "next/link";
import Image from "next/image";

export default function CategoryList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link
          href="/blog?category=coding"
          className={`${styles.category} ${styles.coding}`}
        >
          <Image
            src="/coding.png"
            width={32}
            height={32}
            alt="coding"
            className={styles.image}
          />
          coding
        </Link>
        <Link
          href="/blog?category=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src="/style.png"
            width={32}
            height={32}
            alt="style"
            className={styles.image}
          />
          style
        </Link>
        <Link
          href="/blog?category=fashion"
          className={`${styles.category} ${styles.fashion}`}
        >
          <Image
            src="/fashion.png"
            width={32}
            height={32}
            alt="fashion"
            className={styles.image}
          />
          fashion
        </Link>
        <Link
          href="/blog?category=food"
          className={`${styles.category} ${styles.food}`}
        >
          <Image
            src="/food.png"
            width={32}
            height={32}
            alt="food"
            className={styles.image}
          />
          food
        </Link>
        <Link
          href="/blog?category=travel"
          className={`${styles.category} ${styles.travel}`}
        >
          <Image
            src="/travel.png"
            width={32}
            height={32}
            alt="travel"
            className={styles.image}
          />
          travel
        </Link>
        <Link
          href="/blog?category=culture"
          className={`${styles.category} ${styles.culture}`}
        >
          <Image
            src="/culture.png"
            width={32}
            height={32}
            alt="culture"
            className={styles.image}
          />
          culture
        </Link>
      </div>
    </div>
  );
}
