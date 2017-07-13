import React from "react";
import Link from "gatsby-link";
import { Container } from "react-responsive-grid";

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    let header;
    if (location.pathname === "/") {
      header = (
        <h1>
          <Link to={"/"}>Jamie Henson</Link>
        </h1>
      );
    } else {
      header = (
        <h3>
          <Link to={"/"}>Jamie Henson</Link>
        </h3>
      );
    }
    return (
      <Container>
        {header}
        {children()}
      </Container>
    );
  }
}

Template.propTypes = {
  children: React.PropTypes.function,
  location: React.PropTypes.object,
  route: React.PropTypes.object
};

export default Template;
