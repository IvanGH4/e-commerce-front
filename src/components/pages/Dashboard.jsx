import React from "react";
import PrivateRoute from "../PrivateRoute";
import { BrowserRouter, Link, Switch, useLocation } from "react-router-dom";
import DashboardCategoriesTable from "./DashboardCategoriesTable";

export default function Dashboard() {
  const location = useLocation();

  return (
    <BrowserRouter>
      <div>
        <div id="wrapper" className="pt-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow  py-2">
                  <div className="card-body">
                    <div className="row g-0 align-items-center">
                      <div className="col me-2">
                        <Link to="/admin/categorias">
                          <div className="text-xs fw-bold text-primary text-uppercase mb-1">
                            Categorias
                          </div>
                        </Link>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-calendar fa-2x "></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow  py-2">
                  <div className="card-body">
                    <div className="row g-0 align-items-center">
                      <div className="col me-2">
                        <div className="text-xs fw-bold text-success text-uppercase mb-1">
                          Productos
                        </div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-dollar-sign fa-2x "></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-info shadow  py-2">
                  <div className="card-body">
                    <div className="row g-0 align-items-center">
                      <div className="col me-2">
                        <div className="text-xs fw-bold text-info text-uppercase mb-1">
                          Administradores
                        </div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-clipboard-list fa-2x "></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-warning shadow  py-2">
                  <div className="card-body">
                    <div className="row g-0 align-items-center">
                      <div className="col me-2">
                        <div className="text-xs fw-bold text-warning text-uppercase mb-1">
                          Ordenes
                        </div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-comments fa-2x "></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
                    <h6 className="m-0 fw-bold text-primary">
                      Revenue Sources
                    </h6>
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

        {location.pathname === "/admin" && (
          <section className="ftco-section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6 text-center mb-5">
                  <h2 className="heading-section">Table #09</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="table-wrap">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Invoce</th>
                          <th>Customer</th>
                          <th>Ship</th>
                          <th>Price</th>
                          <th>Pruchased Price</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1001</th>
                          <td>Mark Otto</td>
                          <td>Japan</td>
                          <td>$3000</td>
                          <td>$1200</td>
                          <td>
                            <a href="#" className="btn btn-success">
                              Progress
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
      <Switch>
        <PrivateRoute
          path="/admin/categorias"
          component={DashboardCategoriesTable}
        />
      </Switch>
    </BrowserRouter>
  );
}
