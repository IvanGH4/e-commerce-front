import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";

function Profile() {
  const user = useSelector((state) => state.user);
  const [isFormShow, setIsFormShow] = useState(false);
  const [password, setPassword] = useState("");
  const [orders, setOrders] = useState([]);

  const { addToast } = useToasts();

  const handleClick = async () => {
    setIsFormShow(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.put(
      process.env.REACT_APP_API_URL + "/clients",
      {
        password,
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
      }
    );
    addToast("Contraseña reestablecida!", {
      appearance: "success",
      autoDismiss: true,
    });
    setPassword("");
  };

  useEffect(() => {
    const getClientOrders = async () => {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + "/orders",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let clientOrders = response.data.filter(
        (order) => order.clientId === user.userId
      );
      setOrders(clientOrders);
    };
    getClientOrders();
  });

  return (
    <div className="container">
      <div className="row">
        <button className="btn add-to-cart-btn my-5" onClick={handleClick}>
          Reestablecer contraseña
        </button>
        {isFormShow && (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Ingresa tu nueva contraseña
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn product-card-btn">
              Guardar nueva contraseña
            </button>
          </form>
        )}
      </div>
      <div className="row bg-white p-4">
        <h4 className="css-h2 mb-3">Tus pedidos</h4>
        <ul>
          {orders &&
            orders.map((order) => {
              return (
                <li key={order.id} className="my-3">
                  {order.createdAt}
                  {order.products.map((product) => {
                    return (
                      <span key={product.id}>
                        {product.name} - ${product.orderProduct.unitPrice} X{" "}
                        {product.orderProduct.productQuantity}
                      </span>
                    );
                  })}
                  <span className="bagde badge-custom rounded-pill text-light px-2 py-1 ms-2">
                    {order.status}
                  </span>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
