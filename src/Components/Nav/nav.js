import { NavLink } from "react-router-dom";
import "./nav.css";

export function Nav() {
  return (
    <nav className="nav">
      <div className="nav__logo">🎬 MovieApp</div>

      <ul className="nav__list">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav__link active" : "nav__link"
            }
          >
            🎥 Filmy
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/add"
            className={({ isActive }) =>
              isActive ? "nav__link active" : "nav__link"
            }
          >
            ➕ Dodaj film
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
