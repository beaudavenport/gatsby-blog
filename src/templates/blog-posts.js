import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';
import Layout from '../components/layout';
import blogPostStyles from '../components/blogPost.module.css';


export default function BlogTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { title, publishDate, tagline } = frontmatter;
  return (
    <Layout>
      <div className={blogPostStyles.container}>
        <h1>{title}</h1>
        <p>{tagline}</p>
        <p className={blogPostStyles.date}>{moment(publishDate).format('MMM Do, YYYY')}</p>
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
        tagline
      }
      description: excerpt(pruneLength: 130)
      fields {
        slug
      }
    }
  }
`;
