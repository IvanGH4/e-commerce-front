import { Link } from "react-router-dom";

import "../css/Categories.css";

function Categories() {
  return (
    <div>
      <div className="css-1urqmlx-navContainer themed-nav-container">
        <div className="themed-wide-wrapper wideWrapper themed">
          <div className="upper-nav themed">
            <ul className="css-navbar themed-navbar">
              <li className="themed-navbar-item listItem-navbarItem themed-list-item">
                <Link className="css-link themed-link" to="/storage/">
                  Consolas
                </Link>
              </li>
              <li className="themed-navbar-item listItem-navbarItem themed-list-item">
                <Link className="css-link themed-link" to="/Laptop/">
                  Laptop
                </Link>
              </li>
              <li className="themed-navbar-item listItem-navbarItem themed-list-item">
                <Link className="css-link themed-link" to="/Perifericos/">
                  Perifericos
                </Link>
              </li>
              <li className="themed-navbar-item listItem-navbarItem themed-list-item">
                <Link className="css-link themed-link" to="/Retro/">
                  Retro
                </Link>
              </li>
              <li className="themed-navbar-item listItem-navbarItem themed-list-item">
                <Link className="css-link themed-link" to="/Audio/">
                  Audio
                </Link>
              </li>
              <li className="themed-navbar-item listItem-navbarItem themed-list-item">
                <Link className="css-link themed-link" to="/Pc/">
                  Pc
                </Link>
              </li>
              <li className="themed-navbar-item listItem-navbarItem themed-list-item">
                <Link className="css-link themed-link" to="/monitores/">
                  Monitores
                </Link>
              </li>
              <li className="themed-navbar-item listItem-navbarItem themed-list-item">
                <Link className="css-link themed-link" to="/sale/">
                  Sale
                </Link>
              </li>
              <li className="themed-navbar-item listItem-navbarItem themed-list-item">
                <Link className="css-link themed-link" to="/blog">
                  Sobre este Proyecto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
