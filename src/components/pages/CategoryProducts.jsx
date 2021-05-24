import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../extras/Loader";
import ProductCard from "../ProductCard";
import { useParams } from "react-router-dom";
import { Fade } from "react-reveal";

function CategoryProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id, name } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + `/products/category/${id}`,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response.data);
      setProducts(response.data);
      setLoading(false);
    };
    getProducts();
  }, []);

  return (
    <div className="container">
      {loading ? (
        <div className="row justify-content-center">
          <Loader />
        </div>
      ) : (
        <div className="row justify-content-between">
          <h2 className="my-5">
            Estos son los productos de la categoría <i>{name}</i>
          </h2>
          {products &&
            products.map((product) => {
              return (
                <ProductCard product={product} />
                // <Fade right>
                // </Fade>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default CategoryProducts;
