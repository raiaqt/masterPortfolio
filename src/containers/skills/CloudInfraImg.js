import React, { Component } from "react";
import Lottie from "react-lottie";
import programming from "../../assests/lotties/programming.json";

export default class CloudInfraImg extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: programming,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return <Lottie options={defaultOptions} height={400} width={400} />;
  }
}
