import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { addCategory } from "../redux/categoriesActions";

function DashNewCategoryForm() {
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryImg, setNewCategoryImg] = useState("");

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
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

  return (
    <div className="col-md-6">
      <div className="my-custom-card p-5">
        <h2>Crea una categoría</h2>

        <form onSubmit={handleSubmit}>
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
  );
}

export default DashNewCategoryForm;
