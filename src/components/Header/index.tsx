import styles from "./Header.module.css";
import Link from "next/link";

export function Header() {
  return(
    <header className={styles.header}>
      <Link href="/">
        <div className={styles.anchor}>Index</div>
      </Link>
      <Link href="about">
        <div className={styles.anchor}>About</div>
      </Link>
    </header>
  )
}