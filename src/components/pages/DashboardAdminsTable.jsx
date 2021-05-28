import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setAdmins, deleteAdmin } from "../../redux/adminsActions";
import DashNewAdminForm from "../DashNewAdminForm";
import { useToasts } from "react-toast-notifications";

function DashboardAdminsTable() {
  const user = useSelector((state) => state.user);
  const admins = useSelector((state) => state.admins);

  const dispatch = useDispatch();

  const { addToast } = useToasts();

  useEffect(() => {
    const getAdmins = async () => {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + "/admins",
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
        }
      );
      dispatch(setAdmins(response.data));
    };
    getAdmins();
  }, []);

  const handleClick = async (id) => {
    if (id === user.userId) {
      addToast("No puedes eliminar tu propia cuenta", {
        appearance: "error",
        autoDismiss: true,
      });
    } else {
      dispatch(deleteAdmin(id));
      await axios.delete(
        process.env.REACT_APP_API_URL + "/admins",

        {
          data: {
            id,
          },
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
        }
      );
      addToast("Administrador eliminado", {
        appearance: "success",
        autoDismiss: true,
      });
    }
  };

  return (
    <div>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">Administradores</h2>
            </div>
          </div>
          <div className="row">
            <DashNewAdminForm />
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-wrap">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Nombre</th>
                      <th>Apellido</th>
                      <th>Email</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>

                  <tbody>
                    {admins.map((admin) => {
                      return (
                        <tr key={admin.id}>
                          <th scope="row">{admin.id}</th>
                          <td>{admin.firstname}</td>
                          <td>{admin.lastname}</td>
                          <td>{admin.email}</td>
                          <td>
                            <button
                              onClick={() => handleClick(admin.id)}
                              className="btn btn-danger"
                            >
                              Eliminar
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DashboardAdminsTable;
