import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import AddSubscriber from "./AddSubscriber";
import ShowSubscribers from "./ShowSubscribers";

//The component which owns the state should be the one changing it.
//This means that all functions modifying the state should reside in the
//component where the state resides

const Home = () => {
  return (
    <Switch>
      <Route path="/add" component={AddSubscriber} />
      <Route path="/" component={ShowSubscribers} />
    </Switch>
  );
};

export default Home;
