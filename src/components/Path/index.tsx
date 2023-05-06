// Propsの型を定義
interface Props {
  children: React.ReactNode;
}


const Path = (props: Props) => {
  return (
    <p>
      Get started by editing&nbsp;
      {props.children}
    </p>
  )
}

export default Path