import { useState, useRef } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/userActions";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const prevRoute = useSelector((state) => state.prevRoute);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      process.env.REACT_APP_API_URL + "/tokens",
      {
        email: email,
        password: password,
      },
      { headers: { "Content-Type": "application/json" } }
    );
    dispatch(setUser(response.data));
    history.push(prevRoute);
  };
  return (
    <div className="container">
      <div className="row mt-5 justify-content-center">
        <div className="col-md-6">
          <div className="p-5 my-custom-card">
            <h2>Iniciar sesión</h2>
            <p>
              Inicia sesión usando tus datos. Si no tienes una cuenta también
              puedes
              <Link to="/registroCliente" className="text-decoration-none">
                {" "}
                crear una nueva cuenta
              </Link>
            </p>
            <form id="loginform" onSubmit={handleSubmit}>
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
              <div className="mb-3">
                <button type="submit" className="btn">
                  Iniciar Sesión
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
