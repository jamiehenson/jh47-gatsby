import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import { Container } from "react-responsive-grid";
import styled from "styled-components";
import "typeface-arvo";
import "typeface-cabin";
import "font-awesome/css/font-awesome.css";
import FontAwesome from "react-fontawesome";

const AppContainer = styled.div`
  background: rgb(91, 94, 166);
  color: white;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`;

const StyledContainer = styled(Container)`
  font-family: "Arvo", sans-serif;
`;

const StyledLink = styled(Link)`
  color: white;
`;

const H1 = styled.h1`
  font-size: 3em;
  margin-bottom: 0;
  text-shadow: 0 0 4px black;
  a {
    text-decoration: none;
  }
`;

const Footer = styled.footer`
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  padding: 15px;
  a {
    display: inline-block;
    margin: 0 10px;
    color: rgba(255, 255, 255, 0.5);
    transition: color 0.2s;
    &:hover {
      color: white;
      transition: color 0.2s;
    }
  }
`;

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    let header;
    if (location.pathname === "/") {
      header = (
        <H1>
          <StyledLink to={"/"}>Jamie Henson</StyledLink>
        </H1>
      );
    } else {
      header = (
        <h2 style={{ textShadow: "0 0 3px black" }}>
          <StyledLink to={"/"}>Jamie Henson</StyledLink>
        </h2>
      );
    }

    const footer = (
      <Footer>
        <a href="//github.com/jamiehenson" target="_blank">
          <FontAwesome name="github" size="3x" />
        </a>
        <a href="//twitter.com/HensonJamie" target="_blank">
          <FontAwesome name="twitter" size="3x" />
        </a>
        <a href="//linkedin.com/in/jamiehenson" target="_blank">
          <FontAwesome name="linkedin" size="3x" />
        </a>
      </Footer>
    );

    return (
      <AppContainer>
        <StyledContainer>
          {header}
          {children()}
          {footer}
        </StyledContainer>
      </AppContainer>
    );
  }
}

Template.propTypes = {
  children: PropTypes.func.isRequired,
  location: PropTypes.object,
  route: PropTypes.object
};

export default Template;
