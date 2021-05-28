import React from "react";
import PrivateRoute from "../PrivateRoute";
import { BrowserRouter, Link, Switch, useLocation } from "react-router-dom";
import DashboardCategoriesTable from "./DashboardCategoriesTable";
import HomeAdmin from "../HomeAdmin";
import DashboardProductsTable from "./DashboardProductsTable";
import DashboardAdminsTable from "./DashboardAdminsTable";

export default function Dashboard() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow  py-2">
              <div className="card-body">
                <div className="row g-0 align-items-center">
                  <div className="col me-2">
                    <Link
                      to="/admin/categorias"
                      className="text-decoration-none"
                    >
                      <div className="text-xs fw-bold text-primary text-uppercase mb-1 ">
                        Categorias
                      </div>
                    </Link>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-list fs-2"></i>
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
                    <Link
                      to="/admin/productos"
                      className="text-decoration-none"
                    >
                      <div className="text-xs fw-bold text-success text-uppercase mb-1">
                        Productos
                      </div>
                    </Link>
                  </div>
                  <div className="col-auto">
                    <i class="fas fa-laptop fs-2"></i>
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
                    <Link
                      to="/admin/administradores"
                      className="text-decoration-none"
                    >
                      <div className="text-xs fw-bold text-info text-uppercase mb-1">
                        Administradores
                      </div>
                    </Link>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-users fs-2"></i>
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
                    <Link to="/admin" className="text-decoration-none">
                      <div className="text-xs fw-bold text-warning text-uppercase mb-1">
                        Página principal
                      </div>
                    </Link>
                  </div>
                  <div className="col-auto">
                    <i class="fas fa-house-user fs-2"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PrivateRoute path="/admin" exact component={HomeAdmin} />

      <Switch>
        <PrivateRoute
          path="/admin/categorias"
          component={DashboardCategoriesTable}
        />
        <PrivateRoute
          path="/admin/productos"
          component={DashboardProductsTable}
        />
        <PrivateRoute
          path="/admin/administradores"
          component={DashboardAdminsTable}
        />
      </Switch>
    </BrowserRouter>
  );
}
