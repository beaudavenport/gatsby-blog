import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';
import { Carousel } from 'react-responsive-carousel';
import Layout from '../components/layout';
import SEO from '../components/seo';
import projectStyles from './project.module.css';
import pageStyles from '../pages/page.module.css';

export default function ProjectTemplate({ data }) {
  const { markdownRemark, desktopImages, mobileImages } = data;
  const { frontmatter, html } = markdownRemark;
  const {
    title, techStack, url,
  } = frontmatter;
  return (
    <Layout>
      <SEO title={title} />
      <h6 className={pageStyles.breadcrumbs}>
        <Link to="/">Home</Link>
        {' / '}
        <Link to="/portfolio/">Portfolio</Link>
      </h6>
      <div className={projectStyles.container}>
        <h1 className={projectStyles.title}>{title}</h1>
        <p className={projectStyles.subtitle}>
          <strong>Tech Stack:</strong>
          {' '}
          {techStack}
        </p>
        <p><a href={url}>{url}</a></p>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <hr />
        <div className={projectStyles.carouselContainer}>
          <div className={projectStyles.carouselItemDesktop}>
            <p className={projectStyles.carouselItemCaption}>Desktop</p>
            <Carousel>
              {desktopImages.edges.map((edge, i) => (
                <a
                  className={projectStyles.carouselImageLink}
                  href={edge.node.childImageSharp.fluid.src}
                >
                  <Img
                    fluid={edge.node.childImageSharp.fluid}
                    alt={`Desktop Screenshot ${i + 1} of ${title}`}
                  />
                </a>
              ))}
            </Carousel>
          </div>
          <div className={projectStyles.carouselItemMobile}>
            <p className={projectStyles.carouselItemCaption}>Mobile</p>
            <Carousel>
              {mobileImages.edges.map((edge, i) => (
                <div>
                  <Img
                    fluid={edge.node.childImageSharp.fluid}
                    alt={`Mobile Screenshot ${i + 1} of ${title}`}
                  />
                  )
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </Layout>
  );
}
ProjectTemplate.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export const pageQuery = graphql`
  query($path: String!, $desktopImagesDir: String!, $mobileImagesDir: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
        techStack
        url
      }
      description: excerpt(pruneLength: 130)
      fields {
        slug
      }
    }
    desktopImages: allFile(filter: {relativeDirectory: {eq: $desktopImagesDir}}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    mobileImages: allFile(filter: {relativeDirectory: {eq: $mobileImagesDir}}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
