import logo from "../assets/Pokeviewer-logo.png";
import "./Logo.css";

export function Logo() {
  return (
    <div className="logoContainer">
      <img src={logo} alt="PokeViewer logo" id="logo" />
    </div>
  );
}
