import Head from 'next/head'
import { Main } from '@/components/Main'
import { Header } from '@/components/Header'
import { useCallback, useEffect, useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")
  const [isShow, setIsShow] = useState(true)

  useEffect(() => {
    // DOMを直接操作するのはReactでは原則NGだが今回は背景色を変える程度なので下記で実装。
    document.body.style.backgroundColor = "navy" // マウント時

    return () => {
      document.body.style.backgroundColor = "" //アンマウント時
    }
  }, [])

  const handleClick = useCallback(() => {
    console.log(count)
    if (count < 10) {
      setCount((count) => count + 1) // setCountの引数はcount + 1ではなく関数を渡す。じゃないと、前のcountの状態を引き継いだことにならない
    }
  }
  , [count])

  const handleChange = useCallback((e :React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 5) {
      alert("5文字以内で入力してください。")
      return // returnがなければ、setTextが呼ばれてしまうのでアラートは出るが6文字以上入力できてしまう。
    }
    setText(e.target.value.trim()) //trimは前後の空白を取り除く
  }, [])

  const handleDisplay = useCallback(()=> {
    setIsShow((isShow) => !isShow)
  }, [])

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      {isShow? <h1>{count}</h1> : null} {/* 要素なしはnull */}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow? "カウンターを非表示" : "カウンターを表示"}</button>
      <input type="text" value={text} onChange={handleChange}/> {/* valueに値をセットするのを忘れずに */}
      <Main page="index"/>
    </>
  )
}
