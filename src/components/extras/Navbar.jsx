import { Link, NavLink } from "react-router-dom";

import "../css/Navbar.css";

function Navbar() {
  return (
    <header className="header-area img-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="d-flex align-items-center justify-content-between">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <NavLink className="navbar-brand" to="/">
              Hack Gaming
            </NavLink>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/productList"
                >
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/iniciarSesion"
                  className="nav-link"
                  activeClassName="active"
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/registroCliente"
                >
                  Registrarse
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/registroAdmin"
                >
                  Registrarse Admin
                </NavLink>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <i className="fas fa-shopping-basket"></i>
                  <span>0</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
