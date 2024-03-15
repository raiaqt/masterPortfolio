import React, { Component } from "react";
import Lottie from "react-lottie";
import webdev from "../../assests/lotties/webdev.json";

export default class FullStackImg extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: webdev,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return <Lottie options={defaultOptions} height={300} width={300} />;
  }
}
