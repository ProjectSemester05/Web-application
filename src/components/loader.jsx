import React from "react";
import Lottie from "react-lottie";
import animationData from "../utils/pinjump.json";
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
    <Box position="absolute" top="0" bottom="0" left="0" right="0" backgroundColor="rgba(0,0,0,0.8)" zIndex="100">
      <Lottie options={defaultOptions} height={400} width={400} />
    </Box>
  );
};

export default Loader;
