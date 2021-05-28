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
        <div className="row justify-content-center mt-5">
          <DashNewCategoryForm />
          <DashUpdateCategoryForm />
        </div>
      </div>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">Categorías</h2>
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

export default DashboardCategoriesTable;
