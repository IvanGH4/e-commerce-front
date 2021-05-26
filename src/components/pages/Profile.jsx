import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";

function Profile() {
  const user = useSelector((state) => state.user);
  const [isFormShow, setIsFormShow] = useState(false);
  const [password, setPassword] = useState("");

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
    </div>
  );
}

export default Profile;
