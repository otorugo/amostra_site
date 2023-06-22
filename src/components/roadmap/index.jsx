import LanguageSelector from "../textContent/LanguageSelector";
import {
  RoadmapDescriptionOnePt,
  RoadmapDescriptionTwoPt,
} from "../textContent/br/roadmap";
import {
  RoadmapDescriptionOneEn,
  RoadmapDescriptionTwoEn,
} from "../textContent/en/roadmap";
import "./styles.css";

export default function Roadmap() {
  return (
    <div className="Roadmap" id="roadmap">
      <div className="road">roadmap</div>
      <div className="description">
        <LanguageSelector
          EnComponent={RoadmapDescriptionOneEn}
          PtComponent={RoadmapDescriptionOnePt}
        />
        <br/>
        <LanguageSelector
          EnComponent={RoadmapDescriptionTwoEn}
          PtComponent={RoadmapDescriptionTwoPt}
        />
      </div>
    </div>
  );
}
