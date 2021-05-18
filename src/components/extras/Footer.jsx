import { Link } from "react-router-dom";

import "../css/Navbar.css";

function Footer() {
  return (
    <footer className="footer pt-10 pb-5 mt-auto bg-dark footer-dark">
      <div className="container px-5">
        <div className="row">
          <div className="col-lg-3">
            <div className="footer-brand">SB UI Kit Pro</div>
            <div className="mb-3">Design made easy</div>
            <div className="icon-list-social mb-5">
              <Link className="icon-list-social-link" to="#!">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link className="icon-list-social-link" to="#!">
                <i className="fab fa-facebook"></i>
              </Link>
              <Link className="icon-list-social-link" to="#!">
                <i className="fab fa-github"></i>
              </Link>
              <Link className="icon-list-social-link" to="#!">
                <i className="fab fa-twitter"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <div className="text-uppercase-expanded text-xs mb-4">
                  Product
                </div>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <Link to="#">Landing</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#">Pages</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#">Sections</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#">Documentation</Link>
                  </li>
                  <li>
                    <Link to="#">Changelog</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <div className="text-uppercase-expanded text-xs mb-4">
                  Technical
                </div>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <Link to="#">Documentation</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#">Changelog</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#">Theme Customizer</Link>
                  </li>
                  <li>
                    <Link to="#!">UI Kit</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                <div className="text-uppercase-expanded text-xs mb-4">
                  Includes
                </div>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <Link to="#">Utilities</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#">Components</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#">Layouts</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#">Code Samples</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#">Products</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#">Affiliates</Link>
                  </li>
                  <li>
                    <Link to="#">Updates</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="text-uppercase-expanded text-xs mb-4">
                  Legal
                </div>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <Link to="#">Privacy Policy</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#">Terms and Conditions</Link>
                  </li>
                  <li>
                    <Link to="#">License</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-5" />
        <div className="row align-items-center">
          <div className="col-md-6 small">Copyright © Your Website 2021</div>
          <div className="col-md-6 text-md-end small">
            <Link to="#">Privacy Policy</Link>

            <Link to="#">Terms Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
