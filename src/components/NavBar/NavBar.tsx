import { Menu } from "antd";
import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { menu } from "../../constants/menu";

const NavBar: React.FC = ({}) => {
  const router = useRouter();
  const currentPage =
    menu.find(({ path }) => path.includes(router.pathname))?.path || "/";

  return (
    <Menu
      className="ml-8"
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={[currentPage]}
    >
      {menu.map(({ label, path }) => (
        <Menu.Item key={path}>
          <NextLink href={path} shallow>
            {label}
          </NextLink>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default NavBar;
