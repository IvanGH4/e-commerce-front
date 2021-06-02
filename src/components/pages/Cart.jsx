import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  removeItem,
  increaseQty,
  decreaseQty,
  clearCart,
} from "../../redux/cartActions";
import { useToasts } from "react-toast-notifications";
import { useHistory, useLocation } from "react-router-dom";
import { setPrevRoute } from "../../redux/prevRouteActions";
import axios from "axios";
import Footer from "../extras/Footer";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { addToast } = useToasts();
  const [total, setTotal] = useState(0);

  const checkoutOrder = async () => {
    const response = await axios.post(
      process.env.REACT_APP_API_URL + "/orders",
      {
        cart,
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
      }
    );
    window.location.replace(response.data.redirectURL);
  };

  const handleClick = () => {
    if (user) {
      if (user.userRole === "CLIENT") {
        dispatch(clearCart());
        addToast(
          "Gracias por tu compra! Se te ha enviado un correo electrónico con la verificación.",
          { appearance: "success", autoDismiss: true }
        );
        checkoutOrder();
      } else {
        addToast(
          "Para realizar esta acción debes estar registrado como cliente",
          { appearance: "error", autoDismiss: true }
        );
      }
    } else {
      dispatch(setPrevRoute(location.pathname));
      history.push("/iniciarSesion");
    }
  };

  useEffect(() => {
    let cost = 0;
    cart.map((item) => {
      cost += item.totalPrice;
    });
    setTotal(cost);
  }, [cart]);

  return (
    <>
      <div className="container">
        <div className="row my-5 flex-column-reverse flex-md-row">
          <div className="col-md-8 my-custom-card mt-3 mt-md-0">
            <h4 className="mt-5">Tu carrito de compras</h4>
            {cart.length > 0
              ? cart.map((item) => {
                  return (
                    <div className="row g-0 mt-5 border" key={item.product.id}>
                      <div className="col-md-3 d-flex justify-content-center align-items-center">
                        <img
                          src={item.product.img1}
                          alt={item.product.name}
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-md-9">
                        <div className="card-body">
                          <div className="d-flex justify-content-end">
                            <button
                              className="btn remove-btn bg-white"
                              onClick={() => {
                                dispatch(removeItem(item.product.id));
                                addToast("Producto quitado del carrito", {
                                  appearance: "success",
                                  autoDismiss: true,
                                });
                              }}
                            >
                              <i className="fas fa-times"></i>
                            </button>
                          </div>
                          <h5 className="card-title">{item.product.name}</h5>
                          <p>Cantidad: {item.productQuantity}</p>
                          <p>
                            Total:{" "}
                            {new Intl.NumberFormat("UYU", {
                              style: "currency",
                              currency: "UYU",
                            }).format(item.totalPrice)}
                          </p>
                          <div className="d-flex align-items-center justify-content-end ">
                            <button
                              className="btn me-2"
                              onClick={() =>
                                dispatch(decreaseQty(item.product.id))
                              }
                            >
                              <i className="fas fa-minus"></i>
                            </button>

                            <button
                              className="btn"
                              onClick={() =>
                                dispatch(increaseQty(item.product.id))
                              }
                            >
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              : "No hay productos en tu carrito!"}
          </div>
          <div className="col-md-4 position-relative">
            <div className="my-custom-card p-5 position-md-sticky sticky-md-top">
              <h5>Tu carrito tiene {cart.length} productos</h5>
              <p>
                Total:{" "}
                {new Intl.NumberFormat("UYU", {
                  style: "currency",
                  currency: "UYU",
                }).format(total)}
              </p>
              {cart.length > 0 && (
                <div className="d-grid gap-2">
                  <p className="text-start fs-4">Finaliza tu compra</p>
                  <small>Pagá con:</small>
                  <button className="btn btn-success" onClick={handleClick}>
                    <span>MercadoPago</span>
                  </button>
                  <button
                    className="btn btn-success"
                    disabled
                    onClick={handleClick}
                  >
                    <span>Proximamente podrás con PayPal</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
