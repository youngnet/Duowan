import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/footer/footer";
import { HashRouter as Router, Route } from "react-router-dom";
import "./common/css/reset.min.css";
import "./common/css/public.less";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Footer />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
