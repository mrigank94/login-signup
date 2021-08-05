import { useContext } from "react";
import GrandGrandChild from "./GrandGrandChild";
import { ColorContext } from "./Parent";

const GrandChild = () => {
  const color = useContext(ColorContext);
  console.log("Value of color in grandchild component ", color);
  return <GrandGrandChild />;
};

export default GrandChild;
