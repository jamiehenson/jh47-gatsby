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
    margin-bottom: 0.5em;
  }
  a {
    color: white;
  }
`;

class BlogIndex extends React.Component {
  render() {
    const pageLinks = [];
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    get(this, "props.data.allMarkdownRemark.edges").reverse().forEach(post => {
      if (post.node.path !== "/404/") {
        const title = get(post, "node.frontmatter.title") || post.node.path;
        pageLinks.push(
          <li key={post.node.path}>
            <Link to={post.node.frontmatter.path}>
              {post.node.frontmatter.title}:{" "}
              {moment(post.node.frontmatter.date).format("MMMM Do YYYY")}
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
    allMarkdownRemark {
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
