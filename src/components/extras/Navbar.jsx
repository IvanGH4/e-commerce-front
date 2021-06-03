import { Link, NavLink, useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userActions";

import "../css/Navbar.css";
import { useEffect, useState } from "react";

function Navbar() {
  const [totalQuantity, setTotalQuantity] = useState(0);

  const location = useLocation();

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const history = useHistory();

  const cart = useSelector((state) => state.cart);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let totalQty = 0;
    cart.map((item) => {
      totalQty += item.productQuantity;
    });
    setTotalQuantity(totalQty);
  }, [cart]);

  return (
    <header
      className={`${
        location.pathname === "/"
          ? `portada-home ${isMenuOpen && "active"}`
          : location.pathname === "/shop" ||
            location.pathname.match("/categorias")
          ? `portada-shop ${isMenuOpen && "active"}`
          : location.pathname.match("/productos")
          ? `portada-product ${isMenuOpen && "active"}`
          : location.pathname === "/carrito"
          ? `portada-cart ${isMenuOpen && "active"}`
          : location.pathname.match("/admin")
          ? `portada-admin ${isMenuOpen && "active"}`
          : `portada-login-register ${isMenuOpen && "active"}`
      } img-fluid`}
    >
      <nav className="navbar navbar-expand-lg bg-light">
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
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {/* <span className="navbar-toggler-icon"></span>
               */}
              <span>
                {!isMenuOpen ? (
                  <i className="fas fa-bars"></i>
                ) : (
                  <i className="fas fa-times"></i>
                )}
              </span>
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
                  className="nav-link custom-link"
                  activeClassName="active"
                  to="/shop"
                >
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link custom-link"
                  activeClassName="active"
                  to="/carrito"
                >
                  <i className="fas fa-cart-plus me-1"></i>
                  <span>{totalQuantity}</span>
                </NavLink>
              </li>
              {!user ? (
                <>
                  <li className="nav-item">
                    <NavLink
                      to="/iniciarSesion"
                      className="nav-link custom-link"
                      activeClassName="active"
                    >
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link custom-link"
                      activeClassName="active"
                      to="/registroCliente"
                    >
                      Registrarse
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  {user.userRole === "ADMIN" ? (
                    <div class="dropdown">
                      <button
                        class="btn dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Mi cuenta
                      </button>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li className="nav-item">
                          <NavLink to="/admin" className="nav-link custom-link">
                            <i className="fas fa-user me-2"></i>Administrador
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <button
                            className="nav-link btn custom-link"
                            onClick={() => {
                              dispatch(logout());
                              history.push("/");
                            }}
                          >
                            Cerrar Sesión
                          </button>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <div class="dropdown">
                      <button
                        class="btn dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Mi cuenta
                      </button>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton2"
                      >
                        <li className="nav-item">
                          <NavLink
                            to="/perfil"
                            className="nav-link custom-link"
                          >
                            <i className="fas fa-user me-2"></i>
                            Perfil
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <button
                            className="nav-link btn custom-link"
                            onClick={() => {
                              dispatch(logout());
                              history.push("/");
                            }}
                          >
                            Cerrar Sesión
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </>
              )}
              <li className="nav-item">
                <Link
                  className="text-decoration-none nav-link custom-link"
                  to="/proyecto"
                >
                  Sobre este Proyecto
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
