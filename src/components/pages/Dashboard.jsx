import React from "react";

export default function Dashboard() {
  return (
    <div>
      <ul className="css-navbar themed-navbar d-flex justify-content-between flex-wrap">
        <li>
          <a>Categorias</a>
        </li>
        <li>
          <a>Productos</a>
        </li>
        <li>
          <a>Administradores</a>
        </li>
        <li>
          <a>Ordenes</a>
        </li>
      </ul>
      <div id="wrapper">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow  py-2">
                <div class="card-body">
                  <div class="row g-0 align-items-center">
                    <div class="col me-2">
                      <div class="text-xs fw-bold text-primary text-uppercase mb-1">
                        Earnings (Monthly)
                      </div>
                      <div class="h5 mb-0 fw-bold ">$40,000</div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-calendar fa-2x "></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-success shadow  py-2">
                <div class="card-body">
                  <div class="row g-0 align-items-center">
                    <div class="col me-2">
                      <div class="text-xs fw-bold text-success text-uppercase mb-1">
                        Earnings (Annual)
                      </div>
                      <div class="h5 mb-0 fw-bold ">$215,000</div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-dollar-sign fa-2x "></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-info shadow  py-2">
                <div class="card-body">
                  <div class="row g-0 align-items-center">
                    <div class="col me-2">
                      <div class="text-xs fw-bold text-info text-uppercase mb-1">
                        Tasks
                      </div>
                      <div class="row g-0 align-items-center">
                        <div class="col-auto">
                          <div class="h5 mb-0 me-3 fw-bold ">50%</div>
                        </div>
                        <div class="col">
                          <div class="progress progress-sm me-2">
                            <div
                              class="progress-bar bg-info"
                              role="progressbar"
                              style={{ width: "50%" }}
                              aria-valuenow="50"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-clipboard-list fa-2x "></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-warning shadow  py-2">
                <div class="card-body">
                  <div class="row g-0 align-items-center">
                    <div class="col me-2">
                      <div class="text-xs fw-bold text-warning text-uppercase mb-1">
                        Pending Requests
                      </div>
                      <div class="h5 mb-0 fw-bold ">18</div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-comments fa-2x "></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xl-8 col-lg-7">
              <div class="card shadow mb-4">
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 fw-bold text-primary">Earnings Overview</h6>
                </div>

                <div class="card-body">
                  <div class="chart-area">
                    <canvas id="myAreaChart"></canvas>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-lg-5">
              <div class="card shadow mb-4">
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 fw-bold text-primary">Revenue Sources</h6>
                </div>

                <div class="card-body">
                  <div class="chart-pie pt-4 pb-2">
                    <canvas id="myPieChart"></canvas>
                  </div>
                  <div class="mt-4 text-center small">
                    <span class="me-2">
                      <i class="fas fa-circle text-primary"></i> Direct
                    </span>
                    <span class="me-2">
                      <i class="fas fa-circle text-success"></i> Social
                    </span>
                    <span class="me-2">
                      <i class="fas fa-circle text-info"></i> Referral
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
