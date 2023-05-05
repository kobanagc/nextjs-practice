import { useState, useCallback } from "react"

export const useTodoList = () => {
  const [text, setText] = useState<string>("")
  const [array, setArray] = useState<string[]>([])

  const handleChange = useCallback((e :React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 5) {
      alert("5文字以内で入力してください。")
      return // returnがなければ、setTextが呼ばれてしまうのでアラートは出るが6文字以上入力できてしまう。
    }
    setText(e.target.value.trim()) //trimは前後の空白を取り除く
  }, [])

  const handleAdd = useCallback(() => {
    setArray((prevArray: string[])=> {
      if (prevArray.some(item => item === text)){ //someは配列の中に条件に当てはまるものがあるか探すメソッド
        alert("同じ要素がすでに存在しています。")
        return prevArray
      }
      const newArray = [...prevArray, text] //pushメソッドなどの破壊的メソッドはNG。スプレッド構文で対応。
      return newArray
    })
  }, [text])

  return { text, array, handleChange, handleAdd }
}

