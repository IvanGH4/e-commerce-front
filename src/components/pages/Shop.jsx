import React, { useState } from "react";
import SideBar from "../extras/SideBar";
import ProductsList from "../ProductsList";
import Categories from "../extras/Categories";

function Shop() {
  return (
    <div className="container">
      <Categories />
      <ProductsList />
    </div>
  );
}

export default Shop;
