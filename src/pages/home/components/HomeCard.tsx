import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface Props {
  titolo:string,
  sottotitolo:string,
  descrizioneBreve:string,
  pagePath:string,
  linkLabel:string
}

const HomeCard = ({titolo, sottotitolo, descrizioneBreve, pagePath, linkLabel}:Props) => {

  const { t } = useTranslation();
  const navigate = useNavigate();

  const goToPath = () => {
    navigate(pagePath);
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{t(titolo)}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{t(sottotitolo)}</h6>
        <p className="card-text">{t(descrizioneBreve)}</p>
        <button onClick={goToPath} className="card-link">{t(linkLabel)}</button>
      </div>
    </div>
  );
}
export default HomeCard;