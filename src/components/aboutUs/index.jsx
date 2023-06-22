import { CardList } from "./cardContent";
import "./styles.css";

export default function AboutUs() {
  return (
    <div className="AboutUs"  id="team">
      <div className="title">Who we are?</div>
      <div className="people">
        <CardList/>
      </div>
    </div>
  );
}
