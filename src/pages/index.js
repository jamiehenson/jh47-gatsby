import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import get from "lodash/get";
import Helmet from "react-helmet";
import styled from "styled-components";

const StyledSubHeader = styled.h2`
  margin: 15px 0 20px;
  text-shadow: 0 0 3px black;
`;

const Section = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  background-color: rgba(0, 0, 0, 0.1);
  padding: 10px;
  transition: all 0.3s;
  h3 {
    margin: 0 0 10px;
    text-shadow: 0 0 3px black;
  }
  &.moodlight {
    background-color: rgba(66, 84, 96, 0.5);
    transition: all 0.3s;
  }
  &.laspring {
    background-color: rgba(0, 174, 152, 0.5);
    transition: all 0.3s;
  }
  &.sevenmin {
    background-color: rgba(223, 71, 48, 0.5);
    transition: all 0.3s;
  }
  &.snippet {
    background-color: rgba(14, 78, 173, 0.5);
    transition: all 0.3s;
  }
  &.bond {
    background-color: rgba(209, 160, 84, 0.5);
    transition: all 0.3s;
  }
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  a {
    color: white;
    display: flex;
    transition: all 0.3s;
    padding: 10px;
    margin: 0 -10px;
    &:hover {
      background: rgba(0, 0, 0, 0.5);
      padding: 15px 10px;
      transition: all 0.3s;
    }
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

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projectBlurb: "", projectClass: "" };
    this.changeProjectBlurb = this.changeProjectBlurb.bind(this);
    this.removeProjectBlurb = this.removeProjectBlurb.bind(this);
  }

  changeProjectBlurb(e) {
    this.setState({
      projectBlurb: e.target.dataset.description,
      projectClass: e.target.dataset.name
    });
  }

  removeProjectBlurb(e) {
    this.setState({
      projectBlurb: "",
      projectClass: ""
    });
  }

  render() {
    const pageLinks = [];
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    get(this, "props.data.allMarkdownRemark.edges").forEach(post => {
      if (post.node.path !== "/404/") {
        const title = get(post, "node.frontmatter.title") || post.node.path;
        pageLinks.push(
          <li key={post.node.frontmatter.path}>
            <Link to={post.node.frontmatter.path} style={{ display: "flex" }}>
              <span style={{ flex: 1 }}>
                {post.node.frontmatter.title}
              </span>
              <span style={{ width: "200px", textAlign: "right" }}>
                {post.node.frontmatter.date}
              </span>
            </Link>
          </li>
        );
      }
    });

    const subHeader = (
      <StyledSubHeader>
        Full stack developer and multi-instrumentalist, based in London. I like{" "}
        <span style={{ color: "#FFBFBF" }}>Ruby on Rails</span>, {" "}
        <span style={{ color: "#D9D9FF" }}>React</span>, and many other{" "}
        <span style={{ color: "#FFBFBF" }}>w</span>
        <span style={{ color: "#FFDBA6" }}>o</span>
        <span style={{ color: "#FFFFB2" }}>n</span>
        <span style={{ color: "#D1FFC2" }}>d</span>
        <span style={{ color: "#D9D9FF" }}>r</span>
        <span style={{ color: "#D2BFE0" }}>o</span>
        <span style={{ color: "#C299C2" }}>u</span>
        <span style={{ color: "#B2B2B2" }}>s</span> web-flavoured things.
      </StyledSubHeader>
    );

    const projects = (
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
          onMouseEnter={this.changeProjectBlurb}
          onMouseLeave={this.removeProjectBlurb}
          style={{ backgroundColor: "rgb(0, 174, 152)" }}
          data-name="laspring"
          data-description="An interactive arcade built for the band L.A. Spring using Phaser."
        >
          L.A. Spring{" "}
        </ProjectCell>
        <ProjectCell
          href="/7min"
          onMouseEnter={this.changeProjectBlurb}
          onMouseLeave={this.removeProjectBlurb}
          style={{ backgroundColor: "rgb(223, 71, 48)" }}
          data-name="sevenmin"
          data-description="A clean, concise, and responsive 7 Minute Workout app."
        >
          7 Minute Workout{" "}
        </ProjectCell>
        <ProjectCell
          href="/snippet"
          onMouseEnter={this.changeProjectBlurb}
          onMouseLeave={this.removeProjectBlurb}
          style={{ backgroundColor: "rgb(14, 78, 173)" }}
          data-name="snippet"
          data-description="An easy way to glam up your truncated comments/reviews/whatever!"
        >
          Snippet
        </ProjectCell>
        <ProjectCell
          href="/bond"
          onMouseEnter={this.changeProjectBlurb}
          onMouseLeave={this.removeProjectBlurb}
          style={{ backgroundColor: "rgb(209, 160, 84)" }}
          data-name="bond"
          data-description="A 6 person drinking game with a sophisticated twist and a license to thrill."
        >
          Man With The Golden Fun
        </ProjectCell>
        <p>
          {this.state.projectBlurb}
        </p>
      </ProjectWrapper>
    );

    return (
      <div>
        <Helmet title={get(this, "props.data.site.siteMetadata.title")} />
        {subHeader}
        <Section className={this.state.projectClass}>
          <h3>Here's some stuff I made:</h3>
          {projects}
        </Section>
        <Section>
          <h3>Here're some words I scribbled down:</h3>
          <StyledList>
            {pageLinks}
          </StyledList>
        </Section>
      </div>
    );
  }
}

Index.propTypes = {
  route: PropTypes.object
};

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            path
            title
            date(formatString: "MMMM Do YYYY")
          }
        }
      }
    }
  }
`;
