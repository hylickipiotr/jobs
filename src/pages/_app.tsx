import { ConfigProvider } from "antd";
import "antd/dist/antd.css";
import plPL from "antd/lib/locale/pl_PL";
import moment from "moment";
import "moment/locale/pl";
import { AppProps } from "next/app";
import React, { useEffect } from "react";
import ReduxProvider from "../lib/redux/provider";
import "../styles/tailwind.css";
import "../styles/main.css";
import OfferDrawer from "../components/OfferDrawer/OfferDrawer";
import "react-quill/dist/quill.snow.css";
import { initJsStore } from "../lib/storage-service/idb";

moment.locale("pl");

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    initJsStore();
  });

  return (
    <ReduxProvider>
      <ConfigProvider locale={plPL}>
        <Component {...pageProps} />;
        <OfferDrawer />
      </ConfigProvider>
    </ReduxProvider>
  );
};

export default App;
