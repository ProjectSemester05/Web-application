import * as React from "react";
import LandingPage from "./landing";
import HomePage from "./home";
import CataloguePage from "./catalogues";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function Main() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/catalogues/:name">
          <CataloguePage />
        </Route>
        <Route path="/home/">
          <HomePage />
        </Route>
        <Route path="/home/#access_token">
          <HomePage />
        </Route>
        <Route component={LandingPage} path="/" />
      </Switch>
    </BrowserRouter>
  );
}
export default Main;
