import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import LandingPage from "./pages/landing";
import HomePage from "./pages/home";
import CataloguePage from "./pages/catalogues";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from './redux/store'
function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <BrowserRouter>
          <Switch>
            <Route component={CataloguePage} path="/catalogues" exact />
            <Route component={HomePage} path="/home/:params?"  />
            <Route component={LandingPage} path="/" />
          </Switch>
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  );
}
export default App;
