import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { useParams, useHistory } from "react-router-dom";
import { updateProduct } from "../redux/productsActions";

function DashUpdateProdForm() {
  const [product, setProduct] = useState({});
  const [id, setId] = useState(
    Object.entries(product).length > 0 ? product.id : 0
  );
  const [updatedName, setUpdatedName] = useState(
    Object.entries(product).length > 0 ? product.name : ""
  );
  const [updatedBrand, setUpdatedBrand] = useState(
    Object.entries(product).length > 0 ? product.brand : ""
  );
  const [updatedDesc, setUpdatedDesc] = useState(
    Object.entries(product).length > 0 ? product.description : ""
  );
  const [updatedPrice, setUpdatedPrice] = useState(
    Object.entries(product).length > 0 ? product.price : 0
  );
  const [updatedStock, setUpdatedStock] = useState(
    Object.entries(product).length > 0 ? product.stock : 0
  );
  const [updatedImg1, setUpdatedImg1] = useState("");
  const [updatedImg2, setUpdatedImg2] = useState("");
  const [updatedImg3, setUpdatedImg3] = useState("");
  const [updatedFeatured, setUpdatedFeatured] = useState(
    Object.entries(product).length > 0 ? product.featured : false
  );
  const [selectedCategory, setSelectedCategory] = useState(
    Object.entries(product).length > 0 ? product.categoryId : 1
  );

  const user = useSelector((state) => state.user);
  const categories = useSelector((state) => state.categories);

  const { addToast } = useToasts();
  const dispatch = useDispatch();
  const history = useHistory();
  const { slug } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let info = {
        id,
        name: updatedName,
        brand: updatedBrand,
        description: updatedDesc,
        price: updatedPrice,
        stock: updatedStock,
        featured: updatedFeatured === "true" ? true : false,
      };
      dispatch(updateProduct(info));
      let formData = new FormData();
      formData.append("id", id);
      formData.append("name", updatedName);
      formData.append("brand", updatedBrand);
      formData.append("description", updatedDesc);
      formData.append("img1", updatedImg1);
      formData.append("img2", updatedImg2);
      formData.append("img3", updatedImg3);
      formData.append("price", updatedPrice);
      formData.append("stock", updatedStock);
      formData.append("featured", updatedFeatured === "false" ? false : true);
      await axios({
        method: "PUT",
        url: process.env.REACT_APP_API_URL + "/products",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${user.token}`,
        },
      });
      addToast("Se ha modificado la informaci??n del producto seleccionado", {
        appearance: "success",
        autoDismiss: true,
      });
      history.push("/admin/productos");
    } catch (error) {
      addToast("Hubo un error", { appearance: "error", autoDismiss: true });
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + `/products/${slug}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setId(response.data.id);
      setUpdatedName(response.data.name);
      setUpdatedImg1(response.data.img1);
      setUpdatedImg2(response.data.img2);
      setUpdatedImg3(response.data.img3);
      setUpdatedBrand(response.data.brand);
      setUpdatedDesc(response.data.description);
      setUpdatedPrice(response.data.price);
      setUpdatedStock(response.data.stock);
      setUpdatedFeatured(response.data.featured);
      setSelectedCategory(response.data.categoryId);
      setProduct(response.data);
    };
    getProduct();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="p-5">
            <h2>Actualiza un producto</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name">Id</label>
                <input
                  className="form-control"
                  type="text"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="name">Categor??a</label>
                <select
                  class="form-select"
                  aria-label="Selecciona una categor??a"
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
                  value={updatedName}
                  onChange={(e) => setUpdatedName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="img1">Imagen 1</label>
                <input
                  name="img1"
                  className="form-control"
                  type="file"
                  onChange={(e) => setUpdatedImg1(e.target.files[0])}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="img2">Imagen 2</label>
                <input
                  name="img2"
                  className="form-control"
                  type="file"
                  onChange={(e) => setUpdatedImg2(e.target.files[0])}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="img3">Imagen 3</label>
                <input
                  name="img3"
                  className="form-control"
                  type="file"
                  onChange={(e) => setUpdatedImg3(e.target.files[0])}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="brand">Marca</label>
                <input
                  className="form-control"
                  type="text"
                  value={updatedBrand}
                  onChange={(e) => setUpdatedBrand(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="desc">Descripci??n</label>
                <textarea
                  className="form-control"
                  type="file"
                  value={updatedDesc}
                  onChange={(e) => setUpdatedDesc(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="price">Precio</label>
                <input
                  name="price"
                  className="form-control"
                  type="number"
                  value={updatedPrice}
                  onChange={(e) => setUpdatedPrice(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="stock">Stock</label>
                <input
                  name="stock"
                  className="form-control"
                  type="number"
                  value={updatedStock}
                  onChange={(e) => setUpdatedStock(e.target.value)}
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
                    onChange={(e) => setUpdatedFeatured(e.target.value)}
                    checked={updatedFeatured === "true"}
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
                    onChange={(e) => setUpdatedFeatured(e.target.value)}
                    checked={updatedFeatured === "false"}
                  />
                  No destacado
                </label>
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

export default DashUpdateProdForm;
