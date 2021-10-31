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
        
        <Route
          render={({ location }) => {
            console.log("include home?");
            console.log(location.pathname.includes("home"));
            return location.pathname.includes("home") ? <HomePage /> : <LandingPage />;
          }}
        />

        <Route component={LandingPage} path="/" />
      </Switch>
    </BrowserRouter>
  );
}
export default Main;
