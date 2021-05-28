import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartActions";
import { useToasts } from "react-toast-notifications";

function ProductCard({ product }) {
  const [prodQty, setProdQty] = useState(1);
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const handleClick = () => {
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

  return (
    <div className="custom-product-card cardglobal my-5 text-center py-2">
      <div className="card-body">
        {product.featured ? (
          <span className="badge badge-custom">Destacado</span>
        ) : (
          <span className="badge badge-custom invisible">Normal</span>
        )}
        <h5 className="card-title fs-2 py-3">{product.name}</h5>
        <p>{product.brand}</p>
      </div>
      {/* <div className="categorycard-img img-fluid">
        <img
          src={product.img1}
          className="card-img-top"
          alt={product.name + "," + product.brand}
        />
      </div> */}
      <div className="card border-0 ">
        <div className="categorycard-img">
          <img
            src={product.img1}
            className="card-img-top img-fluid"
            alt={product.name}
          />
        </div>
        <div>
          <p className="fs-3">
            {new Intl.NumberFormat("UYU", {
              style: "currency",
              currency: "UYU",
            }).format(product.price)}
          </p>
          <div className="d-flex align-items-center justify-content-around">
            <Link
              className="text-decoration-none btn product-card-btn px-5"
              to={`/productos/${product.slug}`}
            >
              <i className="fas fa-info-circle"></i> Ver más
            </Link>
            <button className="btn add-to-cart-btn px-5" onClick={handleClick}>
              <i className="fas fa-cart-plus"></i> Comprar
            </button>
          </div>
        </div>
      </div>
      {/* <div className="col-md-6 d-flex align-items-center justify-content-center flex-column">
          <p className="fs-3">${product.price}</p>
          <div className="d-flex align-items-center">
            <Link
              className="text-decoration-none btn product-card-btn"
              to={`/productos/${product.slug}`}
            >
              Quiero este producto
            </Link>
            <button className="btn add-to-cart-btn" onClick={handleClick}>
              <i className="fas fa-cart-plus"></i>
            </button>
          </div>
        </div> */}
    </div>
  );
}

export default ProductCard;
