import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { addAdmin } from "../redux/adminsActions";
import { useHistory } from "react-router-dom";

function DashNewAdminForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

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
    history.push("/admin/adminstradores");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className=" p-5">
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

              <button className="btn btn-success" type="submit">
                Crear
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashNewAdminForm;
