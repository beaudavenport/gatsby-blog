import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import projectStyles from './project.module.css';

export default function ProjectTemplate({ data }) {
  const { markdownRemark, allFile } = data;
  const { frontmatter, html } = markdownRemark;
  const {
    title,
  } = frontmatter;
  return (
    <Layout>
      <div className={projectStyles.container}>
        <h1 className={projectStyles.title}>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        {allFile.edges.map((edge) => (
          <Img fixed={edge.node.childImageSharp.fixed} />))}
      </div>
    </Layout>
  );
}
ProjectTemplate.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export const pageQuery = graphql`
  query($path: String!, $imagesDir: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
      }
      description: excerpt(pruneLength: 130)
      fields {
        slug
      }
    }
    allFile(filter: {relativeDirectory: {eq: $imagesDir}}) {
      edges {
        node {
          childImageSharp {
            fixed(width: 150, height: 150, quality: 90) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;
