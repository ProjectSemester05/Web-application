import React from "react";
import Lottie from "react-lottie";
// import animationData from "../utils/load2.json";
// import animationData from "../utils/success.json";
import animationData from "../utils/loader4.json";
import { Box } from "@chakra-ui/react";

const FormLoader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Box position="absolute" top="0" bottom="0" left="0" right="0" backgroundColor="rgba(0,0,0,0.48)" zIndex="100">    {/* <Box zIndex="100" minH="80vh" alignItems="center" my="auto" position="relative"> */}
      <Box h="100%" my="auto" textAlign="center" position="absolute" top="30%" left={["8%","30%"]}>
        <Lottie options={defaultOptions} height={200} width={200} />
      </Box>
    </Box>
  );
};

export default FormLoader;
