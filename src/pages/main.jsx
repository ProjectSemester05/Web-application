import * as React from "react";
import LandingPage from "./landing";
import HomePage from "./home";
import CataloguePage from "./catalogues";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function Main() {
  let user = useSelector((state) => state.user);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/catalogues/:name">
          {user.token == null ? (
            <Redirect to={{ pathname: "/" }} />
          ) : (
            <CataloguePage/>
          )}
        </Route>
        <Route path="/home/">
          {user.token == null ? (
            <Redirect to={{ pathname: "/" }} />
          ) : (
            <HomePage />
          )}
        </Route>
        <Route component={LandingPage} path="/" />
      </Switch>
    </BrowserRouter>
  );
}
export default Main;
