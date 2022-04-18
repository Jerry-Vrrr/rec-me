import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import "./_Header.scss";
import SearchBar from "../SearchBar/SearchBar";
import { GameContext } from "../../contexts/GameContext";
import logo from "../../images/recme-logo.svg";

const Header = () => {
  const location = useLocation();
  const gameInfo = useContext(GameContext);
  return (
    <section className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="RecMe stylized logo" />
      </Link>

      <div className="search-bar-container">
        {location.pathname === "/" && !gameInfo.gameIsActive && <SearchBar />}
      </div>
    </section>
  );
};

export default Header;
