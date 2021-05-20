import React, { useEffect, useState } from "react";
import axios from "axios";
import FeaturedProduct from "./FeaturedProduct";
import Loader from "./extras/Loader";

function FeaturedProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + "/products/featured",
        { headers: { "Content-Type": "application/json" } }
      );
      setProducts(response.data);
      setLoading(false);
    };
    getProducts();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        products
          .slice(0, 4)
          .map((product) => (
            <FeaturedProduct key={product.id} product={product} />
          ))
      )}
    </>
  );
}

export default FeaturedProductList;
