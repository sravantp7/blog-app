import Image from "next/image";
import styles from "./Card.module.css";
import Link from "next/link";

export default function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div>
          <span className={styles.date}>15.12.2023</span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          reprehenderit.
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam quas
          odio optio quos, consequatur ipsa voluptatibus laboriosam accusamus
          nobis ratione eos sequi doloremque excepturi veniam cupiditate
          delectus! Consequatur, necessitatibus nisi?
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
        <div></div>
      </div>
    </div>
  );
}
