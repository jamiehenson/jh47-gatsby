import React from "react";
import Link from "gatsby-link";
import { Container } from "react-responsive-grid";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  text-align: center;
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
    return (
      <StyledContainer>
        {header}
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
