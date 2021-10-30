import React from "react";
import Lottie from "react-lottie";
import animationData from "../utils/load2.json";
// import animationData from "../utils/success.json";
// import animationData from "../utils/search.json";
// import animationData from "../utils/error.json";
// import animationData from "../utils/bounce.json";
import { Box } from "@chakra-ui/react";

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  
  return (
    <Box position="absolute" top="0" bottom="0" left="0" right="0" backgroundColor="rgb(178, 190, 166)" zIndex="100" height="100vh" overflow="hidden">
    {/* <Box zIndex="100" minH="80vh" alignItems="center" my="auto" position="relative"> */}
      <Box h="100%" my="auto" textAlign="center" position="absolute" top="30%" left={["8%","40%"]}>
        <Lottie options={defaultOptions} height={300} width={300} />
      </Box>
    </Box>
  );
};

export default Loader;
