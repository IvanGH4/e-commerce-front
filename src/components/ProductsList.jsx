import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "./extras/Loader";
import ProductCard from "./ProductCard";
import { Fade } from "react-reveal";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartActions";
import { useToasts } from "react-toast-notifications";

function ProductsList({ categoryFilter }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [prodQty, setProdQty] = useState(1);

  const { addToast } = useToasts();

  const dispatch = useDispatch();

  const handleClick = (product) => {
    const itemToCart = {
      product,
      productQuantity: prodQty,
      totalPrice: product.price * prodQty,
    };
    dispatch(addItem(itemToCart));
    addToast("Producto añadido al carrito!", {
      appearance: "success",
      autoDismiss: true,
    });
    setProdQty((prevValue) => prevValue + 1);
  };

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + "/products",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setProducts(response.data);
      setLoading(false);
    };
    getProducts();
  }, []);

  return (
    <div className="row">
      {loading ? (
        <div className="d-flex justify-content-center mt-5">
          <Loader />
        </div>
      ) : categoryFilter !== "" ? (
        products
          .filter((item) => item.categoryId == categoryFilter)
          .map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })
      ) : (
        products.map((product) => {
          return (
            <Fade right>
              <div className="col-12 cardglobal my-5" key={product.id}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card-body">
                      {product.featured && (
                        <span className="badge bg-success">Destacado</span>
                      )}
                      <h5 className="card-title fs-2">{product.name}</h5>
                      <p>{product.brand}</p>
                    </div>
                    <div className="categorycard-img img-fluid">
                      <img
                        src={product.img1}
                        className="card-img-top"
                        alt={product.name + "," + product.brand}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 d-flex align-items-center justify-content-center flex-column">
                    <p className="fs-3">${product.price}</p>
                    <div className="d-flex">
                      <Link
                        className="text-decoration-none btn btn-outline-dark"
                        to={`/productos/${product.slug}`}
                      >
                        Quiero este producto
                      </Link>
                      <button
                        className="btn btn-success"
                        onClick={() => handleClick(product)}
                      >
                        <i class="fas fa-cart-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          );
        })
      )}
    </div>
  );
}

export default ProductsList;
