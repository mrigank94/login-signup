import React from "react";
import { ColorContext } from "./Parent";

const GrandGrandChild = () => {
  const color = React.useContext(ColorContext);
  return <div style={{ color: color }}>Hello</div>;
};

//Grandparent -> Parent -> Child -> GrandChild -> GrandGrandChild
//                               -> GrandChild1
// color  -> color -> color      -> color
//Passing props at each level => this problem is called props drilling
export default GrandGrandChild;
