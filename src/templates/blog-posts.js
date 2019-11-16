import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/layout';
import blogPostStyles from '../components/blogPost.module.css';


export default function BlogTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { title, publishDate } = frontmatter;
  return (
    <Layout>
      <div className={blogPostStyles.container}>
        <h1>{title}</h1>
        <h2>{publishDate}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
}

BlogTemplate.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        publishDate
        title
      }
      description: excerpt(pruneLength: 130)
      fields {
        slug
      }
    }
  }
`;
