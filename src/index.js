import React from "react";
import ReactDOM from "react-dom";
// import registerServiceWorker from './registerServiceWorker';
import { unregister } from "./registerServiceWorker";

import { HashRouter } from "react-router-dom";
import "./assets/base.css";
import "./assets/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Main from "./Pages/Main";
import { Provider } from "react-redux";
import { store } from "./store";

const rootElement = document.getElementById("root");

const renderApp = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <Component />
      </HashRouter>
    </Provider>,
    rootElement
  );
};

renderApp(Main);

if (module.hot) {
  module.hot.accept("./Pages/Main", () => {
    const NextApp = require("./Pages/Main").default;
    renderApp(NextApp);
  });
}
unregister();

// registerServiceWorker();
