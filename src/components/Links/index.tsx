import styles from './Links.module.css'

interface Item {
  href: string;
  title: string;
  description: string;
}

interface LinksProps {
  items: Item[];
}

const Links = ({ items }: LinksProps) => {

  return (
    <div className={styles.grid}>
      {items.map((item: Item) => {
        return(
          <a
            key={item.href}
            href={item.href}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              {item.title} <span>-&gt;</span> {/* &〜;は HTML Entities. unicodeで書き直すことも可 */}
            </h2>
            <p>
              {item.description}
            </p>
          </a>
        )
      })}
    </div>
  )
}

export default Links