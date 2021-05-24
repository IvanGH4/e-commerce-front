import { Link, NavLink, useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userActions";

import "../css/Navbar.css";

function Navbar() {
  const location = useLocation();

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const history = useHistory();

  const cart = useSelector((state) => state.cart);

  return (
    <header
      className={`${
        location.pathname === "/"
          ? "portada-home"
          : location.pathname === "/shop" ||
            location.pathname.match("/categorias")
          ? "portada-shop"
          : location.pathname.match("/productos")
          ? "portada-product"
          : location.pathname === "/carrito"
          ? "portada-cart"
          : "portada-login-register"
      } img-fluid`}
    >
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
            <NavLink
              className="text-decoration-none my-brand-style custom-color-font"
              to="/"
            >
              HackGaming
            </NavLink>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/shop"
                >
                  Shop
                </NavLink>
              </li>

              {!user ? (
                <>
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
                  {/* <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/registroAdmin"
                    >
                      Registrarse Admin
                    </NavLink>
                  </li> */}
                </>
              ) : (
                <li className="nav-item">
                  <button
                    className="nav-link btn"
                    onClick={() => {
                      dispatch(logout());
                      history.push("/");
                    }}
                  >
                    Cerrar Sesión
                  </button>
                </li>
              )}
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/carrito"
                >
                  <i class="fas fa-cart-plus me-1"></i>
                  <span>{cart.length}</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
