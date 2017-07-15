import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const Section = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  background-color: rgba(0, 0, 0, 0.1);
  padding: 10px;
  transition: all 0.3s;
  h3 {
    margin: 0 0 10px;
    text-shadow: 0 0 3px black;
  }
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  p {
    width: 100%;
    text-align: center;
    margin: 20px 0 0;
    font-weight: bold;
    font-size: 24px;
  }
`;

const ProjectCell = styled.a`
  backgroundColor: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 10px 20px;
  box-sizing: border-box;
  margin: 5px;
  color: white;
  box-shadow: none;
  transition: all 0.3s;
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  width: 100%;
  &:hover {
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.25);
    transform: scale(1.03);
    transition: all 0.3s;
  }
  @media (min-width: 768px) {
    height: 100px;
    width: auto;
  }
`;

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = { blurb: "", colour: "" };
    this.changeBoxFeatures = this.changeBoxFeatures.bind(this);
    this.removeBoxFeatures = this.removeBoxFeatures.bind(this);
  }

  changeBoxFeatures(e) {
    const bgColour = e.target.style.backgroundColor;
    this.setState({
      blurb: e.target.dataset.description,
      colour: bgColour
        .substring(bgColour.lastIndexOf("(") + 1, bgColour.lastIndexOf(")"))
        .split(", ")
    });
  }

  removeBoxFeatures(e) {
    this.setState({
      blurb: "",
      colour: ""
    });
  }

  render() {
    return (
      <Section
        style={{
          backgroundColor: `rgba(${this.state.colour[0]},${this.state
            .colour[1]},${this.state.colour[2]},0.5)`
        }}
      >
        <h3>Here's some stuff I made:</h3>
        <ProjectWrapper>
          {/* <ProjectCell
            href="/"
            onMouseEnter={this.changeProjectBlurb}
            onMouseLeave={this.removeProjectBlurb}
            style={{ backgroundColor: "rgb(66, 84, 96)" }}
            data-name="moodlight"
            data-description="Style your page based upon the time of day, set time intervals and more!"
          >
            Moodlight.js
          </ProjectCell> */}
          <ProjectCell
            href="/laspring"
            onMouseEnter={this.changeBoxFeatures}
            onMouseLeave={this.removeBoxFeatures}
            style={{ backgroundColor: "rgb(0, 174, 152)" }}
            data-description="An interactive arcade built for the band L.A. Spring using Phaser."
          >
            L.A. Spring{" "}
          </ProjectCell>
          <ProjectCell
            href="/7min"
            onMouseEnter={this.changeBoxFeatures}
            onMouseLeave={this.removeBoxFeatures}
            style={{ backgroundColor: "rgb(223, 71, 48)" }}
            data-description="A clean, concise, and responsive 7 Minute Workout app."
          >
            7 Minute Workout{" "}
          </ProjectCell>
          <ProjectCell
            href="/snippet"
            onMouseEnter={this.changeBoxFeatures}
            onMouseLeave={this.removeBoxFeatures}
            style={{ backgroundColor: "rgb(14, 78, 173)" }}
            data-description="An easy way to glam up your truncated comments/reviews/whatever!"
          >
            Snippet
          </ProjectCell>
          <ProjectCell
            href="/bond"
            onMouseEnter={this.changeBoxFeatures}
            onMouseLeave={this.removeBoxFeatures}
            style={{ backgroundColor: "rgb(209, 160, 84)" }}
            data-description="A 6 person drinking game with a sophisticated twist and a license to thrill."
          >
            Man With The Golden Fun
          </ProjectCell>
          <p>
            {this.state.blurb}
          </p>
        </ProjectWrapper>
      </Section>
    );
  }
}

export default Projects;
