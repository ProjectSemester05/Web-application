import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Main from "./pages/main"

function App() {
  console.log("store");
  console.log(store);
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Main/>
      </ChakraProvider>
    </Provider>
  );
}
export default App;
