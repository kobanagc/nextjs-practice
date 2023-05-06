import styles from "./Header.module.css";
import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "Index" },
  { href: "/about", label: "About" },
]

const Header = () => {
  return(
    <header className={styles.header}>
      {NAV_ITEMS.map((item) =>{
        return(
          <Link href={item.href} key={item.href}>
            <div className={styles.anchor}>{item.label}</div>
          </Link>
        )
      })}
    </header>
  )
}

export default Header;