interface Props {
  valore: string,
  clickAction: () => void
}

const Square = ({valore, clickAction}:Props) => {

  return (
    <button className="square" onClick={clickAction}>{valore}</button>
  )
}
export default Square;