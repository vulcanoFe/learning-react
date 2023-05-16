import calcolaVincitore from "../services/calculateWinner";
import Square from "./Square";

interface Props {
  squares:string[],
  xIsNext:boolean,
  vincitore:string,
  onPlay: (squares:string[])=>void
}

const Board = ({squares, xIsNext, vincitore, onPlay}:Props) => {

  const handleSquareClick = (indice:number):void => {
    const vincitore = calcolaVincitore(squares);
    if ( vincitore !== null || squares[indice]!==undefined) return;
    const nextSquares = squares.slice();
    nextSquares[indice] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  return (
    <>
      {/* Prossimo turno, vincitore */}
      <h2>{vincitore!==null ? `Vince: ${vincitore}` : `Prossima mossa: ${(xIsNext) ? "X" : "O"}`} </h2>

      {/* Schema partita */}
      <>
        <div className="board-row">
          <Square valore={squares[0]} clickAction={() => handleSquareClick(0)} />
          <Square valore={squares[1]} clickAction={() => handleSquareClick(1)} />
          <Square valore={squares[2]} clickAction={() => handleSquareClick(2)} />
        </div>
        <div className="board-row">
          <Square valore={squares[3]} clickAction={() => handleSquareClick(3)} />
          <Square valore={squares[4]} clickAction={() => handleSquareClick(4)} />
          <Square valore={squares[5]} clickAction={() => handleSquareClick(5)} />
        </div>
        <div className="board-row">
          <Square valore={squares[6]} clickAction={() => handleSquareClick(6)} />
          <Square valore={squares[7]} clickAction={() => handleSquareClick(7)} />
          <Square valore={squares[8]} clickAction={() => handleSquareClick(8)} />
        </div>
      </>
    </>
  )
}
export default Board;