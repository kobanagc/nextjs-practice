import { useEffect, useMemo } from "react"
import { useRouter } from "next/router"

export const useBgColor = () => {
  const router = useRouter()

  const bgColor = useMemo(()=> {
    switch(router.pathname) {
      case "/":
        return "Navy"
      case "/about":
        return "DarkRed"
      default:
        return ""
    }
  }, [router.pathname])
  useEffect(() => {
  // DOMを直接操作するのはReactでは原則NGだが今回は背景色を変える程度なので下記で実装。
  document.body.style.backgroundColor = bgColor //マウント時

  return () => {
    document.body.style.backgroundColor = "" //アンマウント時
  }
}, [bgColor])}