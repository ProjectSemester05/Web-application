import * as React from "react"
import LoginForm from './components/forms/signup'
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react"
import LandingPage from "./pages/landing"

function App({ Component }) {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <LandingPage/>
    </ChakraProvider>
  )
}
export default App;