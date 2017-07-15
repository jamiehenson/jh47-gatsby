import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import get from "lodash/get";
import styled from "styled-components";
import moment from "moment";

const PostHead = styled.div`
  margin: 0 0 10px;
  h1 {
    margin-bottom: 5px;
  }
`;

const PostBody = styled.div`
  font-family: "Cabin";
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  font-size: 18px;
  line-height: 1.6;
  a {
    color: white;
  }
`;

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, "data.site.siteMetadata.title");

    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <PostHead>
          <h1>
            {post.frontmatter.title}
          </h1>
          <strong>
            {moment(post.frontmatter.date).format("MMMM Do YYYY")}
          </strong>
        </PostHead>
        <PostBody dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date
      }
    }
  }
`;
