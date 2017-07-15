import React from "react";
import Link from "gatsby-link";
import { Container } from "react-responsive-grid";
import styled from "styled-components";
import "typeface-arvo";
import "typeface-cabin";
import "font-awesome/css/font-awesome.css";
import FontAwesome from "react-fontawesome";

const StyledContainer = styled(Container)`
  font-family: "Arvo", sans-serif;
`;

const StyledLink = styled(Link)`
  color: white;
`;

const H1 = styled.h1`
  font-size: 3em;
  margin-bottom: 0;
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
        <h3>
          <StyledLink to={"/"}>Jamie Henson</StyledLink>
        </h3>
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
        <a href="//instagram.com/jhenson47" target="_blank">
          <FontAwesome name="instagram" size="3x" />
        </a>
      </Footer>
    );

    return (
      <StyledContainer>
        {header}
        {children()}
        {footer}
      </StyledContainer>
    );
  }
}

Template.propTypes = {
  children: React.PropTypes.function,
  location: React.PropTypes.object,
  route: React.PropTypes.object
};

export default Template;
