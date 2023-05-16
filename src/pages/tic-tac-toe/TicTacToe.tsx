import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./TicTacToe.css";
import Board from "./components/Board";
import calcolaVincitore from "./services/calculateWinner";

const TicTacToe = () => {

  const { t } = useTranslation();

  const [history, setHistory] = useState([Array(9).fill(undefined)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const vincitore = calcolaVincitore(currentSquares);

  function handlePlay(nextSquares:string[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo (move:number) {
    setCurrentMove(move);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 mb-4">
            <h1>{t("tictactoe.titolo")}</h1>
          </div>
          <div className="col-12">
            <div className="game">
              <div className="game-board">
                <Board squares={currentSquares} xIsNext={xIsNext} vincitore={vincitore} onPlay={handlePlay}/>
              </div>
              <div className="game-info">
                <ol>{moves}</ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicTacToe;