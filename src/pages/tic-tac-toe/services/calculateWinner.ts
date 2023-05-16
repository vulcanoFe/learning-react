import { PATTERN_VITTORIA } from "../constants/pattern-vittoria";

function calcolaVincitore(squares:any[]) {
  for (let i = 0; i < PATTERN_VITTORIA.length; i++) {
    const [a, b, c] = PATTERN_VITTORIA[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default calcolaVincitore;