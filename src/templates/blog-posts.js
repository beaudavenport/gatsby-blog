import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import blogPostStyles from './blogPost.module.css';
import SEO from '../components/seo';
import pageStyles from '../pages/page.module.css';

export default function BlogTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const {
    title, publishDate, tagline, image, imageAttribution, readingTime,
  } = frontmatter;
  return (
    <Layout>
      <SEO title={title} />
      <p className={pageStyles.contentTitle}>Blog</p>
      <div>
        <h1 className={blogPostStyles.title}>{title}</h1>
        <p className={blogPostStyles.tagline}>{tagline}</p>
        <p>
          <span className={blogPostStyles.date}>{publishDate}</span>
          <span className={blogPostStyles.readingTime}>
            {' • '}
            {readingTime}
            {' reading time'}
          </span>
        </p>
        <div className={blogPostStyles.imageContainer}>
          <Img
            fluid={image.childImageSharp.fluid}
            style={{
              maxHeight: 500, width: '100%', objectFit: 'cover', objectPosition: '50%',
            }}
          />
          <div style={{ textAlign: 'right' }} dangerouslySetInnerHTML={{ __html: imageAttribution }} />
        </div>
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
        title
        publishDate
        tagline
        readingTime
        image {
          childImageSharp {
            fluid(maxWidth: 500, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageAttribution
      }
      description: excerpt(pruneLength: 130)
      fields {
        slug
      }
    }
  }
`;
