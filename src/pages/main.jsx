import * as React from "react";
import LandingPage from "./landing";
import HomePage from "./home";
import CataloguePage from "./catalogues";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivacyPage from "./privacy";
import UserManualPage from "./user_manual";

function Main() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/catalogues/:name">
          <CataloguePage />
        </Route>
        <Route path="/privacy">
          <PrivacyPage />
        </Route>
        <Route path="/user-manual">
          <UserManualPage />
        </Route>
        <Route
          render={({ location }) => {
            return location.pathname.includes("home") ? <HomePage /> : <LandingPage />;
          }}
        />

        <Route component={LandingPage} path="/" />
      </Switch>
    </BrowserRouter>
  );
}
export default Main;
