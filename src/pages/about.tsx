import Head from 'next/head'
import { Main } from '@/components/Main'
import { Header } from '@/components/Header'
import { useBgNavy } from '@/hooks/useBgNavy'
import { useCounter } from '@/hooks/useCounter'
import { useTodoList } from '@/hooks/useTodoList'

export default function About() {
  const {count, isShow, handleClick, handleDisplay} = useCounter()
  const {text, array, handleChange, handleAdd} = useTodoList()
  useBgNavy()

  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      {isShow? <h1>{count}</h1> : null} {/* 要素なしはnull */}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow? "カウンターを非表示" : "カウンターを表示"}</button>
      <input type="text" value={text} onChange={handleChange}/> {/* valueに値をセットするのを忘れずに */}
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item)=>{
          return(<li key={item}>{item}</li>)
        })}
      </ul>
      <Main page="about"/>
    </>
  )
}
