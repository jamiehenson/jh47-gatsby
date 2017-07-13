import React from "react";
import Link from "gatsby-link";
import get from "lodash/get";
import Helmet from "react-helmet";
import styled from "styled-components";
import moment from "moment";

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  li {
    padding: 0.5em 0;
  }
  a {
    color: white;
    display: block;
  }
`;

class BlogIndex extends React.Component {
  render() {
    const pageLinks = [];
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    get(this, "props.data.allMarkdownRemark.edges").forEach(post => {
      if (post.node.path !== "/404/") {
        const title = get(post, "node.frontmatter.title") || post.node.path;
        pageLinks.push(
          <li key={post.node.path}>
            <Link to={post.node.frontmatter.path}>
              <span>
                {post.node.frontmatter.title}
              </span>
              <span style={{ float: "right" }}>
                {moment(post.node.frontmatter.date).format("MMMM Do YYYY")}
              </span>
            </Link>
          </li>
        );
      }
    });

    return (
      <div>
        <Helmet title={get(this, "props.data.site.siteMetadata.title")} />
        <StyledList>
          {pageLinks}
        </StyledList>
      </div>
    );
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object
};

export default BlogIndex;

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
            date
          }
        }
      }
    }
  }
`;
