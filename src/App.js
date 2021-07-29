import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Courses from "./components/Courses";
import Price from "./components/Pricing";

const App = () => {
  return (
    <Switch>
      <Route path="/">
        <Header />
        <Price />
        {/*<Courses />*/}
      </Route>
    </Switch>
  );
};

export default App;
