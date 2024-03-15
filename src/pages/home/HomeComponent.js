import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Education from "../education/EducationComponent";
import Experience from "../experience/Experience";
import { blueRevTheme } from "../../theme";

class Home extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />
        <Skills theme={blueRevTheme} />
        <Experience theme={this.props.theme} />
        <Education theme={this.props.theme} />
        {/* <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} /> */}
      </div>
    );
  }
}

export default Home;
