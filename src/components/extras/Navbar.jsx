import { Link } from "react-router-dom";

import "../css/Navbar.css";

function Navbar() {
  return (
    <header class="header-area">
      <div className="header-padding">
        <div className="header-logo">
          <h1>Hackgamming</h1>
        </div>
        <div className="header-navbar">
          <div className="header-search">
            <div className="option-select-area">
              <select name="" id="">
                <option value="All Category">All Category</option>
                <option value="Mobile">Mobile</option>
                <option value="Laptop">Laptop</option>
                <option value="Tablet">Tablet</option>
                <option value="Pc">Pc</option>
              </select>
            </div>
            <input type="search" name="" id="" placeholder="Buscar Producto">
              <button type="submit">
                <span>
                  <i className="fas fa-search"></i>
                </span>
              </button>
            </input>
          </div>
          <div className="cart-area">
            <span>
              <i className="fas fa-shopping-basket"></i>
            </span>
            <span>0</span>
          </div>
        </div>
        <div className="header-social">
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-pinterest"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
