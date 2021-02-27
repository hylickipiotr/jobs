import { NextComponentType } from "next";
import { Provider } from "react-redux";
import { store } from "./store";

const ReduxProvider: NextComponentType = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default ReduxProvider;
