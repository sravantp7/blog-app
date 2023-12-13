import styles from "./Featured.module.css";
import Image from "next/image";

export default function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Dev here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            veniam.
          </h1>
          <p className={styles.postDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam unde
            similique vitae blanditiis asperiores deserunt perspiciatis eaque
            praesentium amet recusandae.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
}
