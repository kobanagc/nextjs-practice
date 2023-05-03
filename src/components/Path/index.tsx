// Propsの型を定義
interface Props {
  children: React.ReactNode;
}


export function Path(props: Props) {
  return (
    <p>
      Get started by editing&nbsp;
      {props.children}
    </p>
  )
}