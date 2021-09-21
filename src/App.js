import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import LandingPage from "./pages/landing";
import HomePage from "./pages/home";
import CataloguePage from "./pages/catalogues";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Switch>
          <Route component={CataloguePage} path="/catalogues" exact/>
          <Route component={HomePage} path="/home" exact/>
          <Route component={LandingPage} path="/" />
        </Switch>
      </BrowserRouter>

    </ChakraProvider>
  );
}
export default App;
