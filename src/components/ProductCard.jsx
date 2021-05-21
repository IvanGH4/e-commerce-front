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
    <div className="col-12 cardglobal my-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card-body">
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
          <div className="d-flex align-items-center">
            <Link
              className="text-decoration-none btn btn-outline-dark"
              to={`/productos/${product.slug}`}
            >
              Quiero este producto
            </Link>
            <button className="btn btn-success" onClick={handleClick}>
              <i class="fas fa-cart-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
