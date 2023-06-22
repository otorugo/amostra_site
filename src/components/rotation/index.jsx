import "./styles.css";
import { Pannellum } from "pannellum-react";
import office from "../../assets/office.png";
//

export default function Rotation() {
  return (
    <div className="Rotation">
      <Pannellum
        width="100%"
        height="100%"
        image={office}
        pitch={4}
        hfov={100}
        autoLoad
        showZoomCtrl={false}
      ></Pannellum>
    </div>
  );
}
