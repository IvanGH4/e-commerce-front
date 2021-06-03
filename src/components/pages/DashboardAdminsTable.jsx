import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setAdmins, deleteAdmin } from "../../redux/adminsActions";
import DashNewAdminForm from "../DashNewAdminForm";
import { useToasts } from "react-toast-notifications";
import DashUpdateAdminForm from "../DashUpdateAdminForm";
import { Link } from "react-router-dom";

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
      console.log(response.data);
      console.log(admins);
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
              <h2 className="heading-section css-h2">Administradores</h2>
            </div>
          </div>
          <div className="row justify-content-start">
            <div>
              <Link to="/admin/nuevo-admin" className="btn">
                <i className="fas fa-plus-square"></i> Crear un administrador
              </Link>
            </div>
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
                    {admins &&
                      admins.map((admin) => {
                        return (
                          <tr key={admin.id}>
                            <th scope="row">{admin.id}</th>
                            <td>{admin.firstname}</td>
                            <td>{admin.lastname}</td>
                            <td>{admin.email}</td>
                            <td>
                              <button
                                onClick={() => handleClick(admin.id)}
                                className="btn"
                              >
                                <i className="fas fa-trash-alt"></i>
                              </button>
                              <Link
                                to={`/admin/administradores/${admin.id}`}
                                className="btn"
                              >
                                <i className="fas fa-edit"></i>
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                  <div
                    className="modal fade"
                    id="createModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-lg bg-white">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title css-h2 fs-3"
                            id="exampleModalLabel"
                          >
                            HackGaming
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <DashNewAdminForm />
                        </div>
                      </div>
                    </div>
                  </div>
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
