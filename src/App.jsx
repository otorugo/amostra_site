import { createContext, useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Rotation from "./components/rotation";
import Welcome from "./components/welcome";
import Patient from "./components/patient";
import AboutProject from "./components/aboutProject";
import Reason from "./components/reason";
import Faq from "./components/faq";

export const LanguageContext = createContext("en");

function App() {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    setLanguage(navigator.language);
  }, [language]);

  return (
    <LanguageContext.Provider value={language}>
      <div className="App">
        <NavBar />
        <Rotation />
        <Welcome />
        <Patient />
        <AboutProject />
        <Reason />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
