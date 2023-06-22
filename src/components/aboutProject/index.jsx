import "./index.css";
import LanguageSelector from "../textContent/LanguageSelector";
import {
  AboutProjectDescriptinoPt,
  AboutProjectTitlePt,
} from "../textContent/br/aboutProject";
import {
  AboutProjectDescriptinoEn,
  AboutProjectTitleEn,
} from "../textContent/en/aboutProject";


export default function AboutProject() {
  return (
    <div className="AboutProject"  id="about" style={{ backgroundImage :"url(/img/aboutProject.png)", backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}>
      <div className="empty"></div>
      <div className="content">
        <span className="title">
          <LanguageSelector
            EnComponent={AboutProjectTitleEn}
            PtComponent={AboutProjectTitlePt}
          />
        </span>
        <br />
        <span className="description">
          <LanguageSelector
            EnComponent={AboutProjectDescriptinoEn}
            PtComponent={AboutProjectDescriptinoPt}
          />
        </span>
      </div>
    </div>
  );
}
