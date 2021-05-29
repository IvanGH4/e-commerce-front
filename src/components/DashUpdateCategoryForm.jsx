import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { updateCategory } from "../redux/categoriesActions";

function DashUpdateCategoryForm({ category }) {
  const [name, setName] = useState(category.name);
  const [id, setId] = useState(category.id);
  const [img, setImg] = useState("");

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

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

  return (
    <div className="col">
      <div className="p-5">
        <h2 className="mb-3">Actualiza una categoría</h2>

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

          <button className="btn btn-success" type="submit">
            Actualizar
          </button>
        </form>
      </div>
    </div>
  );
}

export default DashUpdateCategoryForm;
