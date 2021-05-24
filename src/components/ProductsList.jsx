import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "./extras/Loader";
import ProductCard from "./ProductCard";
import { Fade } from "react-reveal";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartActions";
import { useToasts } from "react-toast-notifications";
import SideBar from "./extras/SideBar";
import { useLocation } from "react-router-dom";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [prodQty, setProdQty] = useState(1);
  const [categoryFilter, setCategoryFilter] = useState("");

  const { addToast } = useToasts();

  const dispatch = useDispatch();
  const location = useLocation();

  // let searchParams =
  //   location.search && location.search.match(/=(.+)/g)[0].slice(1);

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
    <div className="row position-relative">
      <div className="col-md-4">
        <SideBar
          setProducts={setProducts}
          setCategoryFilter={setCategoryFilter}
        />
      </div>
      <div className="col-md-8">
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
                <ProductCard key={product.id} product={product} />
              </Fade>
            );
          })
        )}
      </div>
    </div>
  );
}

export default ProductsList;
