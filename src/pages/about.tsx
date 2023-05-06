import Head from 'next/head'
import { Main } from '@/components/Main'
import { Header } from '@/components/Header'
import type { CounterReturnType, TodoListReturnType } from '@/types';

type HomeProps = CounterReturnType & TodoListReturnType;

export default function About({ //indexとは異なり引数にそのまま分割代入する
  doubleCount,
  isShow,
  handleClick,
  handleDisplay,
  text,
  array,
  handleChange,
  handleAdd,
}: HomeProps) {

  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      {isShow? <h1>{doubleCount}</h1> : null} {/* 要素なしはnull */}
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
