import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

function SideBar() {
  return (
    <ProSidebar className="my-4">
      <SidebarHeader className="p-3 fs-2 text-center">
        Buscá por categoría
      </SidebarHeader>
      <Menu iconShape="square">
        <SubMenu title="Components" icon={<i className="fas fa-cart-plus"></i>}>
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu>
        <SubMenu title="Components" icon={<i className="fas fa-cart-plus"></i>}>
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu>
        <SubMenu title="Components" icon={<i class="fas fa-cart-plus"></i>}>
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu>
        <SubMenu title="Components" icon={<i class="fas fa-cart-plus"></i>}>
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu>
        <SubMenu title="Components" icon={<i class="fas fa-cart-plus"></i>}>
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu>
        <SubMenu title="Components" icon={<i class="fas fa-cart-plus"></i>}>
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu>
        <SubMenu title="Components" icon={<i class="fas fa-cart-plus"></i>}>
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
}

export default SideBar;
