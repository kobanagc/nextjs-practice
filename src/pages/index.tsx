import Head from 'next/head'
import { Main } from '@/components/Main'
import { Header } from '@/components/Header'
import { useEffect, useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    // DOMを直接操作するのはReactでは原則NGだが今回は背景色を変える程度なので下記で実装。
    document.body.style.backgroundColor = "navy" // マウント時

    return () => {
      document.body.style.backgroundColor = "" //アンマウント時
    }
  }, [])

  const handleClick = () => {
    setCount((count) => count + 1) // setCountの引数はcount + 1ではなく関数を渡す。じゃないと、前のcountの状態を引き継いだことにならない
  }

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>{count}</h1>
      <button onClick={handleClick}>ボタン</button>
      <Main page="index"/>
    </>
  )
}
