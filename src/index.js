import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { store } from "redux/store/GlobalStore";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "styles/Main.scss";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
