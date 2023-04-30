import styles from '@/styles/Home.module.css'

// Propsの型を定義
interface Props {
  page: string;
}

export function Path(props: Props) {
  return (
    <p>
      Get started by editing&nbsp;
      <code className={styles.code}>pages/{props.page}.tsx</code>
    </p>
  )
}
