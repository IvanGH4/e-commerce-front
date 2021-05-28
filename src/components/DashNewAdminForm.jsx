import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { addAdmin } from "../redux/adminsActions";

function DashNewAdminForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      process.env.REACT_APP_API_URL + "/admins",
      {
        firstname,
        lastname,
        email,
        password,
      },
      { headers: { "Content-Type": "application/json" } }
    );
    dispatch(addAdmin(response.data.admin));
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="col-md-6">
      <div className="my-custom-card p-5">
        <h2>Nuevo Administrador</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
              placeholder="Nombre"
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
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

          <button className="btn" type="submit">
            Crear
          </button>
        </form>
      </div>
    </div>
  );
}

export default DashNewAdminForm;
