import { useContext } from "react";
import { LanguageContext } from "../../App";

export default function LanguageSelector({ EnComponent, PtComponent }) {
  const language = useContext(LanguageContext);
  if (language.includes("pt")) {
    return (
      <div>
        <PtComponent />
      </div>
    );
  } else {
    return (
      <div>
        <EnComponent />
      </div>
    );
  }
}
