import { Menu } from "antd";
import React from "react";
import { StyledMenu } from "./NavBar.styles";

const NavBar: React.FC = ({}) => {
  return (
    <StyledMenu theme="dark" mode="horizontal" defaultSelectedKeys={["search"]}>
      <Menu.Item key="search">Wyszukiwarka</Menu.Item>
      <Menu.Item key="saved">Zapisane</Menu.Item>
    </StyledMenu>
  );
};

export default NavBar;
