import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
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
          <Link
            className="text-decoration-none text-dark btn btn-success"
            to={`/productos/${product.slug}`}
          >
            Quiero este producto
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
