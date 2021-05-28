import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { addAdmin, updateAdmin } from "../redux/adminsActions";

function DashUpdateAdminForm() {
  const user = useSelector((state) => state.user);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [id, setId] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let info = {
      id,
      firstname,
      lastname,
    };
    dispatch(updateAdmin(info));
    const response = await axios.put(
      process.env.REACT_APP_API_URL + "/admins",
      {
        firstname,
        lastname,
        id,
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
      }
    );
    dispatch(addAdmin(response.data.admin));
    setFirstname("");
    setLastname("");
    setId("");
  };

  return (
    <div className="col-md-6">
      <div className="my-custom-card p-5">
        <h2>Actualizar Administrador</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
              placeholder="ID del Administrador"
            />
          </div>
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

          <button className="btn" type="submit">
            Crear
          </button>
        </form>
      </div>
    </div>
  );
}

export default DashUpdateAdminForm;
