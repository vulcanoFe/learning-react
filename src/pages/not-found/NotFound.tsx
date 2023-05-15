import "./NotFound.css";
import { useTranslation } from "react-i18next";
import NotFoundImg from "../../assets/images/404.png";
import { useNavigate } from "react-router-dom";

const NotFound = () => {

  const { t } = useTranslation();
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  }

  return (
    <>
      <div id="page-404">
        <img src={NotFoundImg} alt="" />
        <p>
          {t("notfound.descrizione1")}<br/>
          {t("notfound.descrizione2")}
        </p>
        <p>{t("notfound.percontinuare")}</p>
        <button onClick={goHome}>Home</button>
      </div>
    </>
  );

};

export default NotFound;