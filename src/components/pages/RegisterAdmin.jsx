import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userActions";
import { useHistory } from "react-router-dom";

function RegisterAdmin() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      process.env.REACT_APP_API_URL + "/admins",
      {
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password,
      },
      { headers: { "Content-Type": "application/json" } }
    );
    dispatch(setUser(response.data));
    history.push("/");
    //esto va a ser dashboard despues
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              placeholder="Nombre"
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              placeholder="Apellido"
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Contraseña"
            />
          </div>
          <button className="btn btn-outline-dark" type="submit">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterAdmin;
