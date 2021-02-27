import { ThunderboltFilled } from "@ant-design/icons";
import { Layout } from "antd";
import React from "react";
import NavBar from "../NavBar/NavBar";

const Header: React.FC = () => {
  return (
    <Layout.Header className="flex items-center">
      <div className="flex items-center space-x-2">
        <ThunderboltFilled className="inline-flex text-2xl text-blue-5" />
        <span className="text-white text-xl font-semibold">Jobs</span>
      </div>
      <NavBar />
    </Layout.Header>
  );
};

export default Header;
