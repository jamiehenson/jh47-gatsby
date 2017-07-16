import React from "react";
import Link from "gatsby-link";
import PropTypes from "prop-types";

import styled from "styled-components";
import get from "lodash/get";

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

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  a {
    color: white;
    display: flex;
    flex-direction: column;
    transition: all 0.3s;
    padding: 10px;
    margin: 0 -10px;
    flex: 1;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    margin: 10px;
    align-items: center;
    text-decoration: none;
    text-align: center;
    &:hover {
      box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.5);
      padding: 15px 10px;
      transition: all 0.3s;
    }
    span:first-child {
      font-size: 18px;
      font-weight: bold;
      padding-bottom: 5px;
    }
    span:last-child {
      font-size: 14px;
    }
  }
`;

class Postlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = { colour: ["", "", ""] };
    this.changeBoxFeatures = this.changeBoxFeatures.bind(this);
    this.removeBoxFeatures = this.removeBoxFeatures.bind(this);
  }

  changeBoxFeatures(e) {
    const bgColour = e.target.style.backgroundColor;
    this.setState({
      colour: bgColour
        .substring(bgColour.lastIndexOf("(") + 1, bgColour.lastIndexOf(")"))
        .split(", ")
    });
  }

  removeBoxFeatures(e) {
    this.setState({
      colour: ["", "", ""]
    });
  }

  render() {
    const pageLinks = [];
    const siteTitle = get(this, "props.data.site.siteMetadata.title");

    let colours = [
      "rgb(249, 109, 9)",
      "rgb(128, 159, 214)",
      "rgb(141, 72, 71)",
      "rgb(166, 81, 144)",
      "rgb(0, 146, 108)",
      "rgb(241, 72, 52)",
      "rgb(215, 67, 100)",
      "rgb(51, 174, 162)",
      "rgb(239, 184, 70)",
      "rgb(78, 80, 153)"
    ];

    this.props.queryResults.forEach((post, index) => {
      if (post.node.path !== "/404/") {
        const title = get(post, "node.frontmatter.title") || post.node.path;
        pageLinks.push(
          <li key={post.node.frontmatter.path}>
            <Link
              to={post.node.frontmatter.path}
              style={{ backgroundColor: colours[index] }}
              onMouseEnter={this.changeBoxFeatures}
              onMouseLeave={this.removeBoxFeatures}
            >
              <span>
                {post.node.frontmatter.title}
              </span>
              <span>
                {post.node.frontmatter.date}
              </span>
            </Link>
          </li>
        );
      }
    });
    return (
      <Section
        style={{
          backgroundColor: `rgba(${this.state.colour[0]},${this.state
            .colour[1]},${this.state.colour[2]},0.5)`
        }}
      >
        <h3>Here're some words I scribbled down:</h3>
        <StyledList>
          {pageLinks}
        </StyledList>
      </Section>
    );
  }
}

Postlist.propTypes = {
  query: PropTypes.array
};

export default Postlist;
