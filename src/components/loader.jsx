import React,{} from "react";
import Lottie from "react-lottie";
import * as animationData from './pinjump.json'

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
    <Lottie
      options={defaultOptions}
      height={400}
      width={400}
      isStopped={this.state.isStopped}
      isPaused={this.state.isPaused}
    />
  );
};

export default Loader;
