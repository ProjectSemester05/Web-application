import * as React from "react";
import LandingPage from "./landing";
import HomePage from "./home";
import CataloguePage from "./catalogues";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../utils/helper";

function Main() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/catalogues/:name">
          {isAuthenticated() ? (
            <CataloguePage />
          ) : (
            <Redirect to={{ pathname: "/" }} />
          )}
        </Route>
        <Route path="/home/">
          {isAuthenticated() ? (
            <HomePage />
          ) : (
            <Redirect to={{ pathname: "/" }} />
          )}
        </Route>
        <Route component={LandingPage} path="/" />
      </Switch>
    </BrowserRouter>
  );
}
export default Main;
