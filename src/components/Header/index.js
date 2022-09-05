import { Link, NavLink } from "react-router-dom";
import "./styles.scss";


const Header = () => (
    <div className="header__menu">
      <ul className="header__list">
        <li className="header__listItem">
          <Link to="/">ACCUEIL</Link>
        </li>
        <li className="header__listItem">
        <NavLink to="cv">CV</NavLink>
        </li>
        <li className="header__listItem">
        <a href="https://github.com/BastienAuT" title="github">GITHUB</a>
        </li>
      </ul>
    </div>

);

export default Header;
