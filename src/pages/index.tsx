import React from "react";
import JobOfferList from "../components/JobOfferList/JobOfferList";
import Layout from "../components/Layout/Layout";
import Search from "../components/Search/Search";
import { initJsStore } from "../lib/storage-service/idb";

export default class extends React.Component {
  componentDidMount() {
    console.log("mounted");
    initJsStore();
  }

  render() {
    return (
      <Layout title="Jobs - Wyszukiwarka ofert">
        <Search />
        <JobOfferList />
      </Layout>
    );
  }
}