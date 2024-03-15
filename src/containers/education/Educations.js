import React, { Component } from "react";
import "./Educations.css";
import { degrees } from "../../portfolio";
import { Fade } from "react-reveal";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import { Accordion, Panel } from "baseui/accordion";

class Educations extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="educations">
        <div className="educations-body-div">
          <Accordion>
            <Panel
              expanded
              className="accord-panel"
              // title={section["title"]}
              overrides={{
                Header: {
                  style: () => ({
                    backgroundColor: `${theme.body}`,
                    border: `1px solid`,
                    borderRadius: `5px`,
                    borderColor: `${theme.headerColor}`,
                    marginBottom: `3px`,
                    fontFamily: "Google Sans Regular",
                    color: `${theme.text}`,
                    ":hover": {
                      color: `${theme.secondaryText}`,
                    },
                    display: "none",
                  }),
                },
                Content: {
                  style: () => ({
                    backgroundColor: `${theme.body}`,
                  }),
                },
              }}
            >
              {degrees.degrees.map((degree) => {
                return (
                  <ExperienceCard
                    index={0}
                    totalCards={1}
                    experience={degree}
                    theme={theme}
                  />
                );
              })}
            </Panel>
          </Accordion>
        </div>
      </div>
    );
  }
}

export default Educations;
