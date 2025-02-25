import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div
      className="main-rev"
      id="skills"
      style={{ backgroundColor: theme.body }}
    >
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header" style={{ color: theme.text }}>
            Skills
          </h1>
        </Fade>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
}
