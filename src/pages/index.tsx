import Head from 'next/head'
import { Main } from '@/components/Main'
import { Header } from '@/components/Header'
import { useCallback, useEffect } from 'react'

const foo = "hoge"

export default function Home() {
  useEffect(() => {
    // DOMを直接操作するのはReactでは原則NGだが今回は背景色を変える程度なので下記で実装。
    document.body.style.backgroundColor = "navy" // マウント時

    return () => {
      document.body.style.backgroundColor = "" //アンマウント時
    }
  }, [])

  const handleClick = useCallback(()=> { // useCallbackを使うとfunctionが読み込まれてもhandleClickは読み込まれなくなる
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
