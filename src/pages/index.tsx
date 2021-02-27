import React from "react";
import JobOfferList from "../components/JobOfferList/JobOfferList";
import Layout from "../components/Layout/Layout";
import Search from "../components/Search/Search";

const Index: React.FC = () => {
  return (
    <Layout title="Jobs - Wyszukiwarka ofert">
      <Search />
      <JobOfferList />
    </Layout>
  );
};

export default Index;
