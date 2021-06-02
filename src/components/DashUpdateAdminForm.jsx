import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { addAdmin, updateAdmin } from "../redux/adminsActions";
import { useParams } from "react-router-dom";

function DashUpdateAdminForm() {
  const user = useSelector((state) => state.user);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [adminId, setAdminId] = useState("");

  const dispatch = useDispatch();

  const { id } = useParams();

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
    setAdminId("");
  };

  useEffect(() => {
    const getAdmin = async () => {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + `/admins/${id}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setAdminId(response.data.id);
      setFirstname(response.data.firstname);
      setLastname(response.data.lastname);
    };
    getAdmin();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="p-5">
            <h2>Actualizar Administrador</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  className="form-control"
                  type="text"
                  value={adminId}
                  onChange={(e) => setAdminId(e.target.value)}
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

              <button className="btn btn-success" type="submit">
                Actualizar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashUpdateAdminForm;
