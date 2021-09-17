import { React, useState } from "react";
import { Box, Text, Flex, Button, Image } from "@chakra-ui/react";
import "@fontsource/montserrat";
import SignUpArea from "../components/forms/signup";
import Footer from "../components/footer";
import Header from "../components/header";
import "../style/landing.css";
import LoginArea from "../components/forms/login";

const LandingPage = () => {
  const [signUpActive, setSignUpActive] = useState(true);
  const toggleForm = (form) => {
    let active = true;
    let activeBtn = "signup-button";
    let deactiveBtn = "login-button";
    if (form === "login") {
      active = false;
      activeBtn = "login-button";
      deactiveBtn = "signup-button";
    }
    document.getElementsByClassName(deactiveBtn)[0].classList.remove("active");
    document.getElementsByClassName(activeBtn)[0].classList.add("active");
    setSignUpActive(active);
  };

  return (
    <Flex flexDirection="column" overflow="auto">
      <Flex>
        <Header />
      </Flex>
      <Flex background="#EEEEEE" mb="3">
        <Box flex="2">
          <Text
            fontSize="4xl"
            textAlign="center"
            fontWeight="600"
            color="#141B57"
            textShadow="0px 4px 76px rgba(0, 0, 0, 0.2)"
            mt="5"
            mb="6"
          >
            Welcome
          </Text>
          <Image mt="6" src={"/assets/images/voice.svg"} mx="auto" />
        </Box>
        <Box flex="1" boxShadow="2xl" borderRadius="7px" m={2} mr={5} h="80%">
          <Flex flexDirection="column">
            <Flex justifyContent="center" mt="5" mb="5" position="relative">
              <Button
                className="signup-button active"
                onClick={() => {
                  toggleForm("signup");
                }}
              >
                SignUp
              </Button>
              <Button
                className="login-button"
                onClick={() => {
                  toggleForm("login");
                }}
              >
                LogIn
              </Button>
            </Flex>
            {signUpActive ? <SignUpArea /> : <LoginArea />}
          </Flex>
        </Box>
      </Flex>
      <Flex>
        <Footer minHeight="20px" />
      </Flex>
    </Flex>
  );
};

export default LandingPage;
