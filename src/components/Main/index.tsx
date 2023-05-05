import { Inter } from 'next/font/google'
import styles from './Main.module.css'
import { Logo } from '@/components/Logo'
import { Links } from '@/components/Links'
import { MainImage } from '@/components/MainImage'
import { Path } from '@/components/Path'
import { useCallback, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

// Propsの型を定義
interface Props {
  page: string;
}

const ITEMS = [
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Docs",
    description: "Find in-depth information about Next.js features and API."
  },
  {
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Learn",
    description: "Learn about Next.js in an interactive course with quizzes!"
  },
  {
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Templates",
    description: "Discover and deploy boilerplate example Next.js projects."
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy",
    description: "Instantly deploy your Next.js site to a shareable URL with Vercel."
  }
]

export function Main(props: Props) {
  const [items, setItems] = useState(ITEMS)
  const handleReduce = useCallback(()=>{
    setItems((prevItems) => {
      return prevItems.slice(0, prevItems.length - 1)
    })
  }, [])
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
        <h2>リンク数：{items.length}個</h2>
        <button onClick={handleReduce}>減らす</button>
        <Links items={items} />
      </main>
    </>
  )
}
