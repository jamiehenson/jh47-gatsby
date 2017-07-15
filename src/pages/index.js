import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import get from "lodash/get";
import Helmet from "react-helmet";
import styled from "styled-components";

import Projects from "../components/projects";
import Postlist from "../components/postlist";

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
`;

class Index extends React.Component {
  render() {
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

    return (
      <div>
        <Helmet title={get(this, "props.data.site.siteMetadata.title")} />
        {subHeader}
        <Projects />
        <Postlist
          queryResults={get(this, "props.data.allMarkdownRemark.edges")}
        />
      </div>
    );
  }
}

Index.propTypes = {
  route: PropTypes.object
};

export default Index;

export const pageQuery = graphql`
  query PostlistQuery {
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
            date(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  }
`;
