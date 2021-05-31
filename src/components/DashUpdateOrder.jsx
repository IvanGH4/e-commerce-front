import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

function DashUpdateOrder() {
  const user = useSelector((state) => state.user);
  const [status, setStatus] = useState("");
  const [order, setOrder] = useState({});

  const { id } = useParams();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.put(
      process.env.REACT_APP_API_URL + "/orders",
      {
        id,
        status,
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
      }
    );
    history.push("/admin");
  };

  useEffect(() => {
    const getOrder = async () => {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + `/orders/${id}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setOrder(response.data);
      setStatus(response.data.status);
    };
    getOrder();
  }, []);
  return (
    <div className="col">
      <div className="p-5">
        <h2 className="mb-3">Actualiza una categoría</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <select
              className="form-select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="sin pagar">sin pagar</option>
              <option value="pago">pago</option>
              <option value="enviado">enviado</option>
              <option value="entregado">entregado</option>
            </select>
          </div>
          <button className="btn btn-success" type="submit">
            Actualizar
          </button>
        </form>
      </div>
    </div>
  );
}

export default DashUpdateOrder;
