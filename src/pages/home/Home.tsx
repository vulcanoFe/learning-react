import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const { t } = useTranslation();
  const navigate = useNavigate();

  const goTicTacToe = () => {
    navigate("/tic-tac-toe");
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col mb-4">
            <h1>{t("home.titolo")}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{t("home.card.tictactoe.titolo")}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{t("home.card.tictactoe.sottotitolo")}</h6>
                <p className="card-text">{t("home.card.tictactoe.descrizionebreve")}</p>
                <button onClick={goTicTacToe} className="card-link">{t("home.cardaction.gioca")}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;