import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Logo } from '@/components/Logo'
import { Links } from '@/components/Links'
import { MainImage } from '@/components/MainImage'
import { Path } from '@/components/Path'

const inter = Inter({ subsets: ['latin'] })

// Propsの型を定義
interface Props {
  page: string;
}

export function Main(props: Props) {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <Path >
            <code className={styles.code}>pages/{props.page}.tsx</code> {/* Childrenを使ってコンポーネントを渡す */}
          </Path>
          <Logo />
        </div>
        <MainImage />
        <Links />
      </main>
    </>
  )
}
