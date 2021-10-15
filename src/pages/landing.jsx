import { React, useState } from "react";
import { Box, Text, Flex, Button, Image } from "@chakra-ui/react";
import "@fontsource/montserrat";
import SignUpArea from "../components/forms/signup";
import Footer from "../components/footer";
import Header from "../components/header";
import "../style/landing.css";
import LoginArea from "../components/forms/login";

const LandingPage = () => {
  
  
  const [signUpActive, setSignUpActive] = useState(false);
  
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
    <Flex flexDirection="column" background="#EEEEEE" id="amazon-root" minHeight="100vh">
      <Flex>
        <Header signed={false} />
      </Flex>
      <Flex mb="3">
        <Box flex={["0", "0", "2"]} display={["none", "block"]}>
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
                className="signup-button"
                left={["14%","19%"]}
                onClick={() => {
                  toggleForm("signup");
                }}
              >
                SignUp
              </Button>
              <Button
                className="login-button active"
                left={["44%","45%"]}
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
      <Footer />
    </Flex>
  );
};

export default LandingPage;
