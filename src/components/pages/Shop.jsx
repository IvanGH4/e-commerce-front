import React, { useState } from "react";
import SideBar from "../extras/SideBar";
import ProductsList from "../ProductsList";

function Shop() {
  const [categoryFilter, setCategoryFilter] = useState("");

  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-md-4">
          <SideBar setCategoryFilter={setCategoryFilter} />
        </div>
        <div className="col-md-8">
          <ProductsList categoryFilter={categoryFilter} />
        </div>
      </div>
    </div>
  );
}

export default Shop;
