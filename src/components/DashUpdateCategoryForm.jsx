import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { updateCategory } from "../redux/categoriesActions";
import { useParams, useHistory } from "react-router-dom";

function DashUpdateCategoryForm() {
  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [img, setImg] = useState("");

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const { id } = useParams();

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let info = { id, name };
    dispatch(updateCategory(info));
    let formData = new FormData();
    formData.append("id", categoryId);
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
    setCategoryId("");
    setName("");
    setImg("");
    history.push("/admin/categorias");
  };

  useEffect(() => {
    const getCategory = async () => {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + `/categories/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setCategoryId(response.data.id);
      setName(response.data.name);
    };
    getCategory();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="p-5">
            <h2 className="mb-3">Actualiza una categoría</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  className="form-control"
                  type="text"
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
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

export default DashUpdateCategoryForm;
