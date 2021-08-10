import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";

ReactDOM.render(
  <Router>
    <Home />
  </Router>,
  document.getElementById("container")
);

//1. This App JSX (Virtual DOM) is rendered inside the container div.
//2. Virtual DOM = Object
//3. Real DOM = <div><sspan></div>
