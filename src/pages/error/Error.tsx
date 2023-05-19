import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ImgErrore from "../../assets/images/alert-error.png"
import "./Error.css";
import { useTranslation } from "react-i18next";

const Error = () => {
 
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [titolo] = useState<string>(location.state?.titolo);
  const [descrizione] = useState<string>(location.state?.descrizione);

  const mostraCtaPrimaria = location.state?.mostraCtaPrimaria;
  const chiaveLabelCtaPrimaria = location.state?.chiaveLabelCtaPrimaria;
  const pathRedirectCtaPrimaria = location.state?.pathRedirectCtaPrimaria;

  useEffect( () => {
    if(!titolo || !descrizione) {
      navigate("/home");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const redirectCtaPrimaria = () => {
    navigate(pathRedirectCtaPrimaria);
  }

  return (
    <>
      <div id="error-page">
        <div className="row justify-content-center justify-content-center">
          <div className="col-6">
            <img alt="Errore" src={ImgErrore} />
            <p>
              {titolo}
            </p>
            <p>{descrizione}</p>
            {mostraCtaPrimaria && <button onClick={redirectCtaPrimaria}>{t(chiaveLabelCtaPrimaria)}</button>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;