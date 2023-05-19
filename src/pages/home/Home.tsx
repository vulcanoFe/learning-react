import { useTranslation } from "react-i18next";
import HomeCard from "./components/HomeCard";

const Home = () => {

  const { t } = useTranslation();

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
            <HomeCard 
              titolo="home.card.tictactoe.titolo" 
              sottotitolo="home.card.tictactoe.sottotitolo" 
              descrizioneBreve="home.card.tictactoe.descrizionebreve" 
              linkLabel="home.cardaction.gioca" pagePath="/tic-tac-toe"/>
          </div>
          <div className="col-sm-4">
            <HomeCard 
              titolo="home.card.fruitandvegstore.titolo" 
              sottotitolo="home.card.fruitandvegstore.sottotitolo" 
              descrizioneBreve="home.card.fruitandvegstore.descrizionebreve" 
              linkLabel="home.cardaction.vai" pagePath="/fruit-and-veg-store"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;