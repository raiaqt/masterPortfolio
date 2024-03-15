import React, { Component } from "react";
import Lottie from "react-lottie";
import writing from "../../assests/lotties/writing.json";

export default class DesignImg extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: writing,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return <Lottie options={defaultOptions} height={300} width={300} />;
  }
}
