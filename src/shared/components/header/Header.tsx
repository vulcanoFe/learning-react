import "./Header.css";
import "./sticky-header.js";
import HeaderLogo from "../../../assets/images/HeaderLogo.png";
import AppLogo from "../../../assets/images/AppLogo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  }

  const goReactDocumentation = () => {
    window.open("https://react.dev/", "_blank");
  }

  return (
    <header className="l-top-header mb-5">

      {/*Barra verde con logo BCC e logo Huba START*/}
      <div className="c-note-head">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="d-flex flex-row">
                <img onClick={goReactDocumentation} src={HeaderLogo} width="200" alt="Logo" style={{"cursor":"pointer"}}/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Barra bianca con logo app e menu START*/}
      <div className="l-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-11 col-md-8">
              <div className="c-main-logo">
                <img src={AppLogo} onClick={goHome} width="200" alt="Logo" style={{"cursor":"pointer"}} />
              </div>
            </div>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;