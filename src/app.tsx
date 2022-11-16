import React from 'react'
import { Provider } from "react-redux";
import configStore from "./store";
import "./app.scss";
import "taro-ui/dist/style/index.scss";

const store = configStore();
const App = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

export default App
