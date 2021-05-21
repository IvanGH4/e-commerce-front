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

function SideBar({ setCategoryFilter }) {
  const categories = useSelector((state) => state.categories);

  return (
    <ProSidebar className="my-4 custom-sidebar">
      <SidebarHeader className="p-3 fs-2 text-center">
        Buscá por categoría
      </SidebarHeader>
      <Menu iconShape="square">
        <MenuItem>
          <button
            className="btn text-white p-0 fs-4 fw-bold"
            onClick={() => setCategoryFilter("")}
          >
            Inicio
          </button>
        </MenuItem>
        {categories &&
          categories.map((category) => {
            return (
              <MenuItem key={category.id}>
                <button
                  className="btn p-0 text-white"
                  onClick={() => setCategoryFilter(category.id)}
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
