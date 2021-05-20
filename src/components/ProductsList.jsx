import React, { useEffect, useState } from "react";

import axios from "axios";

function ProductsList() {
  const [products, setProducts] = useState([]);

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
    };
    getProducts();
  }, []);

  return (
    <div className="container">
      <div className="row">Productos</div>
    </div>
  );
}

export default ProductsList;
