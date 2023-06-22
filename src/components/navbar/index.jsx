import "./style.css";
import quasarLogo from "../../assets/quasar.png";
import twitter from "../../assets/twitter.png";
import discord from "../../assets/discord.png";

export default function NavBar() {
  const scrollWhenClicked = (divName) => {
    const element = document.getElementById(divName);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="NavBar">
      <div className="logo">
        <img src={quasarLogo} alt="quasar logo" />
      </div>
      <div className="options">
        <ul>
          <li onClick={() => scrollWhenClicked("about")}>About</li>
          <li onClick={() => scrollWhenClicked("roadmap")}>Roadmap</li>
          <li onClick={() => scrollWhenClicked("team")}>Team</li>
          <li onClick={() => scrollWhenClicked("faq")}>FAQ</li>
          <li>
            <img src={twitter} alt="twitter" />
          </li>
          <li>
            <img src={discord} alt="discord" />
          </li>
        </ul>
      </div>
    </div>
  );
}
