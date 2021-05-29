import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  setCategories,
  deleteCategory,
  updateCategory,
  addCategory,
} from "../../redux/categoriesActions";
import { useToasts } from "react-toast-notifications";
import DashNewCategoryForm from "../DashNewCategoryForm";
import DashUpdateCategoryForm from "../DashUpdateCategoryForm";

function DashboardCategoriesTable() {
  const categories = useSelector((state) => state.categories);
  const user = useSelector((state) => state.user);

  const { addToast } = useToasts();
  const dispatch = useDispatch();

  const handleClick = async (id) => {
    dispatch(deleteCategory(id));
    await axios.delete(
      process.env.REACT_APP_API_URL + "/categories",

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
    addToast("Se ha eliminado la categoría", {
      appearance: "success",
      autoDismiss: true,
    });
  };

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + "/categories",
        { headers: { "Content-Type": "application/json" } }
      );
      dispatch(setCategories(response.data));
    };
    getCategories();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <h2 className="heading-section css-h2">Categorías</h2>
          </div>
        </div>
        <div className="row justify-content-center mt-5"></div>
      </div>

      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="table-wrap">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Nombre</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>

                  <tbody>
                    {categories.map((category) => {
                      return (
                        <tr key={category.id}>
                          <th scope="row">{category.id}</th>
                          <td>{category.name}</td>
                          <td>
                            <button
                              onClick={() => handleClick(category.id)}
                              className="btn"
                            >
                              <i className="fas fa-trash-alt"></i>
                            </button>
                            <button
                              className="btn"
                              data-bs-toggle="modal"
                              data-bs-target="#editModal"
                            >
                              <i className="fas fa-edit"></i>
                            </button>
                            <button
                              className="btn"
                              data-bs-toggle="modal"
                              data-bs-target="#createModal"
                            >
                              <i className="fas fa-plus-square"></i>
                            </button>
                          </td>
                          <div
                            className="modal fade"
                            id="editModal"
                            tabindex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-lg">
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
                                  <DashUpdateCategoryForm category={category} />
                                </div>
                              </div>
                            </div>
                          </div>
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
                          <DashNewCategoryForm />
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

export default DashboardCategoriesTable;
