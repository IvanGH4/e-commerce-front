import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "./extras/Loader";
import ProductCard from "./ProductCard";

function ProductsList({ categoryFilter }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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
                  <Link
                    className="text-decoration-none btn btn-success"
                    to={`/productos/${product.slug}`}
                  >
                    Quiero este producto
                  </Link>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default ProductsList;
