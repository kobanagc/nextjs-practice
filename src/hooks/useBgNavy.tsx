import { useEffect } from "react"

export const useBgNavy = () => {
  useEffect(() => {
  // DOMを直接操作するのはReactでは原則NGだが今回は背景色を変える程度なので下記で実装。
  document.body.style.backgroundColor = "navy" // マウント時

  return () => {
    document.body.style.backgroundColor = "" //アンマウント時
  }
}, [])}