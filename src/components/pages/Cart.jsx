import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  increaseQty,
  decreaseQty,
  clearCart,
} from "../../redux/cartActions";
import { useToasts } from "react-toast-notifications";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h4 className="fs-2 fw-bold">Tu carrito de compras</h4>
          {cart.length > 0
            ? cart.map((item) => {
                return (
                  <div className="row g-0 mt-5 border" key={item.product.id}>
                    <div className="col-md-3">
                      <img
                        src={item.product.img1}
                        alt={item.product.name}
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-md-9">
                      <div className="card-body">
                        <h5 className="card-title">{item.product.name}</h5>
                        <p>Cantidad: {item.productQuantity}</p>
                        <p>Total: ${item.totalPrice}</p>
                        <div className="d-flex align-items-center justify-content-around">
                          <button
                            className="btn"
                            onClick={() =>
                              dispatch(decreaseQty(item.product.id))
                            }
                          >
                            <i class="fas fa-minus"></i>
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              dispatch(removeItem(item.product.id));
                              addToast("Producto quitado del carrito", {
                                appearance: "success",
                                autoDismiss: true,
                              });
                            }}
                          >
                            Quitar
                          </button>
                          <button
                            className="btn"
                            onClick={() =>
                              dispatch(increaseQty(item.product.id))
                            }
                          >
                            <i class="fas fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : "No hay productos en tu carrito!"}
          <hr />
          {cart.length > 0 && (
            <div className="d-grid gap-2 mb-3">
              <p className="text-start fs-4">Finaliza tu compra</p>
              <button
                className="btn btn-success"
                onClick={() => {
                  dispatch(clearCart());
                  addToast(
                    "Gracias por tu compra! Se te ha enviado un email con la verificación.",
                    { appearance: "success", autoDismiss: true }
                  );
                }}
              >
                <span>Pagar con MercadoPago</span>
              </button>
              <button
                className="btn btn-success"
                onClick={() => {
                  dispatch(clearCart());
                  addToast(
                    "Gracias por tu compra! Se te ha enviado un email con la verificación.",
                    { appearance: "success", autoDismiss: true }
                  );
                }}
              >
                <span>Pagar con PayPal</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
