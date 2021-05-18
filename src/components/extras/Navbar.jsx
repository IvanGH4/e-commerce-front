import { Link, NavLink, useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userActions";

import "../css/Navbar.css";

function Navbar() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:3000/tokens",
      {
        email: email,
        password: password,
      },
      { headers: { "Content-Type": "application/json" } }
    );
    dispatch(setUser(response.data));
    history.push("/");
  };

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
            <form className="d-flex ms-auto">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar Productos"
                aria-label="Search"
              />
            </form>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  className="nav-link btn text-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Login
                </button>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">
                  Registrarse
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

      <div className="modal" tabindex="-1" id="staticBackdrop">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Inicio de Sesion</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form id="loginform">
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="ejemplo@mail.com"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Contraseña"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                form="loginform"
                type="button"
                className="btn btn-primary"
              >
                Iniciar Sesion
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
