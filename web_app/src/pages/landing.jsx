import { React, useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Text,
  Flex,
  extendTheme,
  Image,
} from "@chakra-ui/react";
import "@fontsource/montserrat";
import Signup from "../components/forms/signup";
import Footer from "../components/footer";
import Header from "../components/header";

const theme = extendTheme({
  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
  },
});

const LandingPage = ({ onLogin }) => {
  return (
    <Flex flexDirection="column">
      <Flex>
        <Header/>
      </Flex>
      <Flex background="#EEEEEE">
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
            <Image mt="6" src={"/assets/images/voice.svg"} mx="auto"/>          

        </Box>
        <Box flex="1" boxShadow="2xl" borderRadius="7px"  m={2} mr={5} h="80%">
            <Flex flexDirection="column">
            <Signup />
              
            </Flex>
        </Box>
      </Flex>
      <Flex>
        <Footer minHeight="20px"/>
      </Flex>
    </Flex>

    // <Flex
    //   width="full"
    //   align="center"
    //   justifyContent="center"
    //   mt="10px"
    // >
    //   <Box
    //     px={8}
    //     py={4}
    //     maxWidth="600px"
    //     borderRadius={10}
    //     width="full"
    //     bg="transparent"
    //   >
    //     <LoginHeader />
    //     <LoginForm onLogin={onLogin} />
    //   </Box>
    // </Flex>
  );
};

export default LandingPage;
