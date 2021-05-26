import React, { useState } from "react";
import SideBar from "../extras/SideBar";
import ProductsList from "../ProductsList";
import Categories from "../extras/Categories";
import Footer from "../extras/Footer";

function Shop() {
  return (
    <>
      <div className="container">
        <Categories />
        <ProductsList />
      </div>
      <Footer />
    </>
  );
}

export default Shop;
