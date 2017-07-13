import React from "react";
import Link from "gatsby-link";
import { Container } from "react-responsive-grid";
import styled from "styled-components";
import "typeface-arvo";
import "typeface-cabin";
import FontAwesome from "react-fontawesome";

const StyledContainer = styled(Container)`
  font-family: "Arvo", sans-serif;
`;

const StyledLink = styled(Link)`
  color: white;
`;

const H1 = styled.h1`font-size: 3em;`;

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

    const navLinks = (
      <div>
        <FontAwesome name="github" />
        <h2>Full stack developer and multi-instrumentalist</h2>
      </div>
    );

    return (
      <StyledContainer>
        {header}
        {navLinks}
        <hr />
        {children()}
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
