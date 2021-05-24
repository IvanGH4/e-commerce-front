import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
} from "react-pro-sidebar";
import "../css/Sidebar.css";
import "react-pro-sidebar/dist/css/styles.css";
import { useHistory } from "react-router-dom";
import SearchBox from "./SearchBox";

function SideBar({ setCategoryFilter, setProducts }) {
  const categories = useSelector((state) => state.categories);
  const history = useHistory();

  return (
    <ProSidebar className="my-4 custom-sidebar" width="300px">
      <SidebarHeader className="p-3 fs-4">
        <p>Buscá lo que precises</p>
        <SearchBox setProducts={setProducts} />
      </SidebarHeader>
      <Menu iconShape="square">
        <MenuItem>
          <button
            className="btn sidebar-btn p-0 fs-4 fw-bold"
            onClick={() => {
              setCategoryFilter("");
              history.push({
                search: `?category=all`,
              });
            }}
          >
            Todos los productos
          </button>
        </MenuItem>
        {categories &&
          categories.map((category) => {
            return (
              <MenuItem key={category.id}>
                <button
                  className="btn p-0 sidebar-btn"
                  onClick={() => {
                    setCategoryFilter(category.id);
                    history.push({
                      search: `?category=${category.id}`,
                    });
                  }}
                >
                  {category.name}
                </button>
              </MenuItem>
            );
          })}
      </Menu>
    </ProSidebar>
  );
}

export default SideBar;
