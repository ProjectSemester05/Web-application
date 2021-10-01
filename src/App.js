import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import LandingPage from "./pages/landing";
import HomePage from "./pages/home";
import CataloguePage from "./pages/catalogues";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Amplify, { Auth, Hub } from 'aws-amplify';
import { Provider } from "react-redux";
import store from './redux/store'

import {config} from "./config/config";

Amplify.configure({
  Auth: {
    identityPoolId: config.IDENTITY_POOL_ID,

    region: config.REGION,
    identityPoolRegion: config.IDENTITY_POOL_REGION,

    userPoolId: config.USER_POOL_ID,

    userPoolWebClientId: config.USER_POOL_WEB_CLIENT,
    oauth: {
      domain: config.DOMAIN,
      redirectSignIn: config.REDIRECT_SIGN_IN,
      redirectSignOut: config.REDIRECT_SIGN_OUT,
      responseType: config.RESPONSE_TYPE
    },
  },
});

function App() {
   const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
        case 'cognitoHostedUI':
          getUser().then(userData => setUser(userData));
          break;
        case 'signOut':
          setUser(null);
          break;
        case 'signIn_failure':
        case 'cognitoHostedUI_failure':
          console.log('Sign in failure', data);
          break;
      }
    });

    getUser().then(userData => setUser(userData));
  }, []);

  function getUser() {
    return Auth.currentAuthenticatedUser()
      .then(userData => userData)
      .catch(() => console.log('Not signed in'));
  }

  return (
    <Provider store={store}>
      <ChakraProvider>
        <BrowserRouter>
          <Switch>
            <Route component={CataloguePage} path="/catalogues" exact />
            <Route component={HomePage} path="/home/"  />
            <Route component={LandingPage} path="/" />
          </Switch>
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  );
}
export default App;
