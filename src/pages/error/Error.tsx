import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ImgErrore from "../../assets/images/alert-error.png"
import "./Error.css";

const Error = () => {
  
  const navigate = useNavigate();
  const location = useLocation();
  const [titolo] = useState<string>(location.state?.titolo);
  const [descrizione] = useState<string>(location.state?.descrizione);

  useEffect( () => {
    if(!titolo || !descrizione) {
      navigate("/transazioni");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div id="error-page">
        <div className="row justify-content-center justify-content-center">
          <div className="col-6">
            <img alt="Errore" src={ImgErrore} />
            <p>{titolo}</p>
            <p>{descrizione}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;