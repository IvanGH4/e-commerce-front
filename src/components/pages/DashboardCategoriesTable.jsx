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

function DashboardCategoriesTable() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [img, setImg] = useState("");
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryImg, setNewCategoryImg] = useState("");
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    let info = { id, name };
    dispatch(updateCategory(info));
    let formData = new FormData();
    formData.append("id", id);
    formData.append("name", name);
    formData.append("img", img);
    await axios({
      method: "PUT",
      url: process.env.REACT_APP_API_URL + "/categories",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${user.token}`,
      },
    });
    setId("");
    setName("");
    setImg("");
  };
  const handleAdd = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("name", newCategoryName);
    formData.append("img", newCategoryImg);
    const response = await axios({
      method: "POST",
      url: process.env.REACT_APP_API_URL + "/categories",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${user.token}`,
      },
    });
    dispatch(addCategory(response.data));
    setNewCategoryName("");
    setNewCategoryImg("");
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
          <div className="col-md-6">
            <div className="my-custom-card p-5">
              <h2>Crea una categoría</h2>

              <form onSubmit={handleAdd}>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="text"
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                    required
                    placeholder="Nombre"
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="file"
                    onChange={(e) => setNewCategoryImg(e.target.files[0])}
                    required
                  />
                </div>

                <button className="btn" type="submit">
                  Crear
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="my-custom-card p-5">
              <h2>Actualiza una categoría</h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    required
                    placeholder="ID"
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Nombre"
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="file"
                    onChange={(e) => setImg(e.target.files[0])}
                    required
                  />
                </div>

                <button className="btn" type="submit">
                  Actualizar
                </button>
              </form>
            </div>
          </div>
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
