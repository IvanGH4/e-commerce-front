import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../extras/Loader";
import ProductCard from "../ProductCard";
import { useParams } from "react-router-dom";
import { Fade } from "react-reveal";

function CategoryProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  console.log("este es el id ", id);

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
        <div className="row">
          {products &&
            products.map((product) => {
              return (
                <Fade right>
                  <ProductCard product={product} />
                </Fade>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default CategoryProducts;
