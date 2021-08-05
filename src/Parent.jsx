import { createContext } from "react";
import Child from "./Child";

export const ColorContext = createContext();

const Parent = () => {
  const color = "blue";

  return (
    <ColorContext.Provider value={color}>
      <Child />
    </ColorContext.Provider>
  );
};

export default Parent;
