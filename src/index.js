import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import DateComponent from "./GrandParent";
import Parent from "./Parent";

ReactDOM.render(
  <BrowserRouter>
    <DateComponent />
  </BrowserRouter>,
  document.getElementById("container")
);

//1. This App JSX (Virtual DOM) is rendered inside the container div.
//2. Virtual DOM = Object
//3. Real DOM = <div><sspan></div>
