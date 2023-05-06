import { useState, useCallback, useMemo } from "react"

export const useCounter = () =>{
  const [count, setCount] = useState<number>(0)
  const [isShow, setIsShow] = useState<boolean>(true)
  const doubleCount = useMemo(() => {
    return count * 2 // ここはsetCount(count * 2)だと無限レンダリングが発生してしまう。
  }, [count])
  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1) // setCountの引数はcount + 1ではなく関数を渡す。じゃないと、前のcountの状態を引き継いだことにならない。また前回の値だと分かりやすくするためにcountではなくprevcountと命名。
    }
  }
  , [count])

  const handleDisplay = useCallback(()=> {
    setIsShow((prevIsShow) => !prevIsShow)
  }, [])

  return {count, isShow, doubleCount, handleClick, handleDisplay} //setCountやsetIsShowはこのuseCounterフックス内でしか使わないのでreturnしなくてよい。
}

// カスタムフックスとコンポーネントの使い分けは、処理とUIを切り離したいかどうか。
// 同じ機能を使いたいがUIはページごとに変えたい場合はカスタムフックスで処理をまとめる。
// 処理とUIがどのページでも常に同じ場合はコンポーネント化する。