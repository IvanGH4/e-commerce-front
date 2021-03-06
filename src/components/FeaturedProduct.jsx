import React from "react";
import { Link } from "react-router-dom";

function FeaturedProduct({ product }) {
  return (
    <div
      className="cardglobal text-center custom-category-card py-5
    "
    >
      <Link
        className="text-decoration-none text-dark"
        to={`/productos/${product.slug}`}
      >
        <div className="card border-0">
          <div className="categorycard-img img-fluid">
            <img
              src={product.img1}
              className="card-img-top"
              alt={product.name + "," + product.brand}
            />
          </div>

          <div className="card-body">
            <h5 className="card-title custom-font-color">{product.name}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default FeaturedProduct;
