import Head from 'next/head'
import { Main } from '@/components/Main'
import { Header } from '@/components/Header'

const foo = "hoge"

export default function Home() {
  const handleClick = () => alert(foo)
  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <button onClick={handleClick}>ボタン</button>
      <Main page="index"/>
    </>
  )
}
