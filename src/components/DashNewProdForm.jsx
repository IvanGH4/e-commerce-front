import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useToasts } from "react-toast-notifications";
import { addProduct } from "../redux/productsActions";

function DashNewProdForm() {
  const [productCategory, setProductCategory] = useState(1);
  const [productName, setProductName] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productStock, setProductStock] = useState(0);
  const [productImg1, setProductImg1] = useState("");
  const [productImg2, setProductImg2] = useState("");
  const [productImg3, setProductImg3] = useState("");
  const [featured, setFeatured] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(1);

  const user = useSelector((state) => state.user);
  const categories = useSelector((state) => state.categories);

  const { addToast } = useToasts();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", productName);
    formData.append("brand", productBrand);
    formData.append("description", productDesc);
    formData.append("img1", productImg1);
    formData.append("img2", productImg2);
    formData.append("img3", productImg3);
    formData.append("price", productPrice);
    formData.append("stock", productStock);
    formData.append("featured", featured === "false" ? false : true);
    const response = await axios({
      method: "POST",
      url: process.env.REACT_APP_API_URL + "/products",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${user.token}`,
      },
    });
    dispatch(addProduct(response.data));
    addToast("Producto creado!", { appearance: "success", autoDismiss: true });
    setProductName("");
    setProductBrand("");
    setProductDesc("");
    setProductPrice(0);
    setProductStock(0);
    setProductImg1("");
    setProductImg2("");
    setProductImg3("");
  };
  return (
    <div className="col-md-6">
      <div className="my-custom-card p-5">
        <h2>Crea un producto</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">Categoría</label>
            <select
              class="form-select"
              aria-label="Selecciona una categoría"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories &&
                categories.map((category) => (
                  <option value={category.id}>{category.name}</option>
                ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="name">Nombre</label>
            <input
              className="form-control"
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="img1">Imagen 1</label>
            <input
              name="img1"
              className="form-control"
              type="file"
              onChange={(e) => setProductImg1(e.target.files[0])}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="img2">Imagen 2</label>
            <input
              name="img2"
              className="form-control"
              type="file"
              onChange={(e) => setProductImg2(e.target.files[0])}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="img3">Imagen 3</label>
            <input
              name="img3"
              className="form-control"
              type="file"
              onChange={(e) => setProductImg3(e.target.files[0])}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="brand">Marca</label>
            <input
              className="form-control"
              type="text"
              value={productBrand}
              onChange={(e) => setProductBrand(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc">Descripción</label>
            <textarea
              className="form-control"
              type="file"
              value={productDesc}
              onChange={(e) => setProductDesc(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="price">Precio</label>
            <input
              name="price"
              className="form-control"
              type="number"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="stock">Stock</label>
            <input
              name="stock"
              className="form-control"
              type="number"
              value={productStock}
              onChange={(e) => setProductStock(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 form-check">
            <label htmlFor="featured" className="form-check-label">
              <input
                name="featured"
                className="form-check-input"
                type="radio"
                value="true"
                onChange={(e) => setFeatured(e.target.value)}
                checked={featured === "true"}
              />
              Destacado
            </label>
          </div>
          <div className="form-check">
            <label htmlFor="notFeatured" className="form-check-label">
              <input
                name="notFeatured"
                className="form-check-input"
                type="radio"
                value="false"
                onChange={(e) => setFeatured(e.target.value)}
                checked={featured === "false"}
              />
              No destacado
            </label>
          </div>

          <button className="btn" type="submit">
            Crear
          </button>
        </form>
      </div>
    </div>
  );
}

export default DashNewProdForm;
