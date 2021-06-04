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
import queryString from "query-string";
import SearchBox from "./extras/SearchBox";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [prodQty, setProdQty] = useState(1);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [filterParams, setFilterParams] = useState({});

  const { addToast } = useToasts();

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    let parsedLocation = queryString.parse(location.search);
    console.log(parsedLocation);
    setFilterParams(parsedLocation);
    if (parsedLocation.category && parsedLocation.category !== "") {
      const getProductsByCategory = async () => {
        setLoading(true);
        const response = await axios.get(
          process.env.REACT_APP_API_URL +
            `/products/category/${Number(parsedLocation.category)}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setProducts(response.data);
        setLoading(false);
      };
      getProductsByCategory();
    } else if (parsedLocation.search && parsedLocation.search !== "") {
      const getProductsBySearchTerm = async () => {
        setLoading(true);
        const response = await axios.get(
          process.env.REACT_APP_API_URL + `/products/search`,
          {
            params: {
              search: parsedLocation.search,
            },
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setProducts(response.data);
        setLoading(false);
      };
      getProductsBySearchTerm();
    } else {
      const getProducts = async () => {
        setLoading(true);
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
    }
  }, [location.search]);

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

  return (
    <div className="row position-relative g-3 justify-content-between">
      <div className="position-fixed d-flex float-cart-btn">
        <Link
          className="btn d-flex justify-content-center align-items-center shadow"
          to="/carrito"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "#ffa36c",
          }}
        >
          <i className="fas fa-cart-plus"></i>
        </Link>
      </div>
      <SearchBox setProducts={setProducts} />
      {/* <div className="col-md-4">
        <SideBar
          setProducts={setProducts}
          setCategoryFilter={setCategoryFilter}
        />
      </div> */}
      {/* <div className="col-md-8"> */}
      {loading ? (
        <div className="d-flex justify-content-center mt-5">
          <Loader />
        </div>
      ) : (
        products.map((product) => {
          return (
            <>
              <ProductCard key={product.id} product={product} />
            </>
          );
        })
      )}
      {/* </div> */}
    </div>
  );
}

export default ProductsList;
