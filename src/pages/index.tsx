import React from "react";
import { useSelector } from "react-redux";
import OfferList from "../components/OfferList/OfferList";
import Layout from "../components/Layout/Layout";
import Search from "../components/Search/Search";
import { selectOffers } from "../lib/redux/Offers/Offers.slice";

const Index: React.FC = () => {
  const offers = useSelector(selectOffers);

  return (
    <Layout title="Jobs - Wyszukiwarka ofert">
      <Search />
      <OfferList offers={offers} />
    </Layout>
  );
};

export default Index;
