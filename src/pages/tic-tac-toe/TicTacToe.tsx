import { useTranslation } from "react-i18next";
import "./Transazioni.css"

const TicTacToe = () => {

  const { t } = useTranslation();

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col mb-4">
            <h1>{t("tictactoe.titolo")}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicTacToe;