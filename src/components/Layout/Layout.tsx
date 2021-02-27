import React from "react";
import { Layout as AntLayout } from "antd";
import Header from "../Header/Header";
import Head from "next/head";

export interface LayoutProps {
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <meta lang="pl"></meta>
        <title>{title}</title>
      </Head>
      <AntLayout className="flex min-h-screen">
        <Header />
        <AntLayout.Content className="flex-1 flex flex-col items-center bg-white px-6 py-14">
          {children}
        </AntLayout.Content>
      </AntLayout>
    </>
  );
};

export default Layout;
