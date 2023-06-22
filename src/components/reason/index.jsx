import LanguageSelector from "../textContent/LanguageSelector";
import { ReasonDescriptionPt, ReasonTitlePt } from "../textContent/br/reason";
import { ReasonDescriptionEn, ReasonTitleEn } from "../textContent/en/reason";
import "./style.css";
import reasonImg from "../../assets/reason.png";

const InstitutionButton = () => {
  return <button>Instituiçao 1</button>;
};

export default function Reason() {
  return (
    <div className="Reason">
      <div className="empty"></div>
      <div className="content">
        <span className="title">
          <LanguageSelector
            EnComponent={ReasonTitleEn}
            PtComponent={ReasonTitlePt}
          />
        </span>
        <br />
        <br />
        <span className="description">
          {" "}
          <LanguageSelector
            EnComponent={ReasonDescriptionEn}
            PtComponent={ReasonDescriptionPt}
          />
        </span>
        <br />
        <InstitutionButton />
      </div>
      <div className="reason-image">
        <img src={reasonImg} alt="" />
      </div>
    </div>
  );
}
