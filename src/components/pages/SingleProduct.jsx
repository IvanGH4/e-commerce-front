import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../extras/Loader";
import { useParams } from "react-router-dom";

function SingleProduct() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [productStock, setProductStock] = useState([]);
  const [productQuantity, setProductQuantity] = useState(1);

  const { slug } = useParams();

  useEffect(() => {
    setProductStock([]);
    const getProduct = async () => {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + `/products/${slug}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setProduct(response.data);
      setLoading(false);
    };
    getProduct();
    for (let i = 1; i <= product.stock; i++) {
      setProductStock((prevState) => [...prevState, i]);
    }
  }, []);

  return (
    <div className="container">
      {loading ? (
        <Loader />
      ) : (
        <div className="row my-5">
          <div className="col-md-4 my-4">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={product.img1}
                    className="d-block w-100"
                    alt={product.name}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={product.img2}
                    className="d-block w-100"
                    alt={product.name}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={product.img3}
                    className="d-block w-100"
                    alt={product.name}
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-md-5 my-4">
            <div className="my-3">
              {product.featured && (
                <span class="badge rounded-pill bg-primary my-3">
                  Producto Destacado
                </span>
              )}
              <h2 className="css-h2 my-3">{product.name.toUpperCase()}</h2>{" "}
            </div>

            <h3 className="my-3">{product.brand}</h3>
            <p className="my-3">{product.description}</p>
          </div>
          <div className="col-md-3 my-4">
            <p className="my-3">Precio: ${product.price}</p>
            <p className="my-3">Quedan {product.stock} disponibles!</p>
            <select
              className="form-select"
              value={productQuantity}
              onChange={(e) => setProductQuantity(e.target.value)}
            >
              {productStock.map((item) => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
            <button className="btn">
              {" "}
              Agregar al Carrito <i class="fas fa-cart-plus"></i>{" "}
            </button>

            <div class="tit">Compra online con:</div>

            <div class="cnt">
              <ul class="d-inline d-flex list-unstyled justify-content-between flex-column flex-md-row">
                <li class="fs-3">
                  <i class="fab fa-cc-visa text-dark"></i>
                </li>
                <li class="fs-3">
                  <i class="fab fa-cc-mastercard text-dark"></i>
                </li>
                <li class="fs-3">
                  <i class="fab fa-cc-diners-club text-dark"></i>
                </li>
                <li class="fs-3">
                  <i class="fab fa-cc-paypal text-dark"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleProduct;
