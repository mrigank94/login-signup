import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import contactReducer from "./reducer/contactReducer";

const store = createStore(contactReducer);
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Home />
    </Router>
  </Provider>,
  document.getElementById("container")
);

//1. This App JSX (Virtual DOM) is rendered inside the container div.
//2. Virtual DOM = Object
//3. Real DOM = <div><sspan></div>
