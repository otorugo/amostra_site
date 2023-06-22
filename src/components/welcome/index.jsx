import "./style.css";
import LanguageSelector from "../textContent/LanguageSelector";
import {
  WelcomeTitleEn,
  WelcomeDescriptionOneEn,
} from "../textContent/en/welcomeText";
import {
  WelcomeTitlePt,
  WelcomeDescriptionOnePt,
} from "../textContent/br/welcomeText";

import fichaNFT from "../../assets/fichaNFT.png";

export default function Welcome() {
  return (
    <div className="Welcome">
      <div className="empty"> </div>
      <div className="content">
        <span className="title">
          <LanguageSelector
            EnComponent={WelcomeTitleEn}
            PtComponent={WelcomeTitlePt}
          />
        </span>
        <br />
        <span className="description">
          <LanguageSelector
            EnComponent={WelcomeDescriptionOneEn}
            PtComponent={WelcomeDescriptionOnePt}
          />
        </span>
      </div>
      <div className="img-container">
        <div>
          <img src={fichaNFT} alt="fichaNFT" />
        </div>
      </div>
      <div className="empty"> </div>
    </div>
  );
}
