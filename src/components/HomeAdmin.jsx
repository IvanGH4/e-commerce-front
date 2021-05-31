import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

function HomeAdmin() {
  const [orders, setOrders] = useState([]);

  const user = useSelector((state) => state.user);

  useEffect(() => {
    const getOrders = async () => {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + "/orders",
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setOrders(response.data);
      console.log(response.data);
    };
    getOrders();
  }, []);

  return (
    <div>
      <div id="wrapper" className="pt-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 fw-bold text-primary">
                    Earnings Overview
                  </h6>
                </div>

                <div className="card-body">
                  <div className="chart-area">
                    <canvas id="myAreaChart"></canvas>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-5">
              <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 fw-bold text-primary">Revenue Sources</h6>
                </div>

                <div className="card-body">
                  <div className="chart-pie pt-4 pb-2">
                    <canvas id="myPieChart"></canvas>
                  </div>
                  <div className="mt-4 text-center small">
                    <span className="me-2">
                      <i className="fas fa-circle text-primary"></i> Direct
                    </span>
                    <span className="me-2">
                      <i className="fas fa-circle text-success"></i> Social
                    </span>
                    <span className="me-2">
                      <i className="fas fa-circle text-info"></i> Referral
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section css-h2">Órdenes</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-wrap">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Cliente Id</th>
                      <th>Fecha de pedido</th>
                      <th>Productos/PrecioXCantidad</th>
                      {/* <th>Precio total</th> */}
                      <th>Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders &&
                      orders.map((order) => {
                        return (
                          <tr key={order.id}>
                            <th scope="row">{order.id}</th>
                            <td>{order.clientId}</td>
                            <td>{order.createdAt}</td>
                            <td>
                              <ul className="list-unstyled">
                                {order.products.map((product) => {
                                  return (
                                    <li key={product.id}>
                                      {product.name} - $
                                      {product.orderProduct.unitPrice} X{" "}
                                      {product.orderProduct.productQuantity}
                                    </li>
                                  );
                                })}
                              </ul>
                            </td>
                            {/* <td>
                              {order.products.map((item) => {
                                Object.keys(item.orderProduct).map((key) => {
                                  let total = 0;
                                  if (
                                    key === "unitPrice" ||
                                    key === "productQuantity"
                                  ) {
                                    total += item.orderProduct[key];
                                  }
                                  return <p>{total}</p>;
                                });
                              })}
                            </td> */}
                            <td>
                              {order.status}
                              <Link
                                to={`/admin/ordenes/${order.id}`}
                                className="btn"
                              >
                                <i className="fas fa-edit"></i>
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeAdmin;
