import React from 'react';
import { graphql, Link } from 'gatsby';
import { PropTypes } from 'prop-types';
import Img from 'gatsby-image';
import SEO from '../components/seo';
import blogPageStyles from './blogPage.module.css';
import pageStyles from './page.module.css';

import Layout from '../components/layout';

export const BlogThumbnailRow = ({ node }) => (
  <Link to={node.fields.slug} className={blogPageStyles.linkContainer}>
    <Img
      className={blogPageStyles.thumbnailContainer}
      fixed={node.frontmatter.image.childImageSharp.fixed}
    />
    <div className={blogPageStyles.textContainer}>
      <h1 className={blogPageStyles.title}>{node.frontmatter.title}</h1>
      <p className={blogPageStyles.caption}>
        {node.frontmatter.tagline}
      </p>
      <p className={blogPageStyles.date}>
        by
        {' '}
        <Link to="/about/">
          <strong>Beau</strong>
        </Link>
        {', '}
        {node.frontmatter.publishDate}
      </p>
    </div>
  </Link>
);

BlogThumbnailRow.propTypes = {
  node: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export const HeroBlogThumbnailRow = ({ node }) => (
  <Link to={node.fields.slug} className={blogPageStyles.heroLinkContainer}>
    <div>
      <h1 className={blogPageStyles.heroTitle}>{node.frontmatter.title}</h1>
      <p className={blogPageStyles.heroCaption}>
        {node.frontmatter.tagline}
      </p>
      <h6 className={blogPageStyles.date}>
        by
        {' '}
        <Link to="/about/">
          <strong>Beau</strong>
        </Link>
        {', '}
        {node.frontmatter.publishDate}
      </h6>
    </div>
    <Img
      className={blogPageStyles.heroThumbnailContainer}
      fixed={node.frontmatter.heroImage.childImageSharp.fixed}
    />
  </Link>
);

HeroBlogThumbnailRow.propTypes = {
  node: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const BlogPage = ({ data }) => {
  const first3Nodes = data.allMarkdownRemark.edges.map((edge) => edge.node);
  return (
    <Layout>
      <SEO title="Home" />
      <h6 className={pageStyles.breadcrumbs}>
        <Link to="/">Home</Link>
        {' / '}
        <Link to="/">Blog</Link>
      </h6>
      <div>
        {first3Nodes.map((node) => (
          <BlogThumbnailRow node={node} />
        ))}
      </div>
    </Layout>
  );
};

BlogPage.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default BlogPage;

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "images/shop.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(
      limit: 3
      filter: { frontmatter: { type: { eq: "blog-posts"} } },
      sort: { fields: [frontmatter___number], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            publishDate
            tagline
            readingTime
            image {
              childImageSharp {
                fixed(width: 175, height: 175, quality: 90) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            heroImage: image {
              childImageSharp {
                fixed(width: 350, height: 350, quality: 90) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          excerpt(format: PLAIN, pruneLength: 200)
          fields {
            slug
          }
        }
      }
    }
  }
 `;
