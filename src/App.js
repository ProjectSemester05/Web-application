import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import LandingPage from "./pages/landing";
import HomePage from "./pages/home";
import CataloguePage from "./pages/catalogues";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";
import Main from "./pages/main"

function App() {
  console.log("store");
  console.log(store);
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Main/>
        {/* <BrowserRouter>
          <Switch>
            <Route component={CataloguePage} path="/catalogues" exact>
              {/* {location.state == undefined ? (
                <Redirect to={{ pathname: "/" }} />
              ) : (
                <Box style={{ width: "100vw" }}>
                  <SeatMap
                    {...location.state}
                    colorMode={colorMode}
                    price={75000}
                  />
                </Box>
              )} */}
            {/* </Route>
            <Route component={HomePage} path="/home/" />
            <Route component={LandingPage} path="/" />
          </Switch> */}
        {/* </BrowserRouter> */} 
      </ChakraProvider>
    </Provider>
  );
}
export default App;
