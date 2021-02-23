import { AppProps } from "next/app";
import React from "react";
import "antd/dist/antd.css";
import ReduxProvider from "../redux/provider";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ReduxProvider>
      <Component {...pageProps} />;
    </ReduxProvider>
  );
};

export default App;
