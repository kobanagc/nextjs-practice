import Head from 'next/head'
import { Main } from '@/components/Main'
import { Header } from '@/components/Header'
import { useCallback } from 'react'

const foo = "hoge"

export default function Home() {
const handleClick = useCallback(()=> { {/* useCallbackを使うとfunctionが読み込まれてもhandleClickは読み込まれなくなる*/}
    alert("クリック！！")
  },[])
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
