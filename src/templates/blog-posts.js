import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import * as blogPostStyles from './blogPost.module.css';
import SEO from '../components/seo';
import * as pageStyles from '../pages/page.module.css';

export default function BlogTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const {
    title, publishDate, tagline, image, imageAttribution,
  } = frontmatter;
  return (
    <Layout>
      <SEO title={title} />
      <h6 className={pageStyles.breadcrumbs}>
        <Link to="/">Home</Link>
        {' / '}
        <Link to="/blog/">Blog</Link>
      </h6>
      <div>
        <h1 className={blogPostStyles.title}>{title}</h1>
        <p className={blogPostStyles.tagline}>{tagline}</p>
        <h6 className={blogPostStyles.date}>
          by
          {' '}
          <Link to="/about/">
            Beau Davenport
          </Link>
          {', '}
          {publishDate}
        </h6>
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
