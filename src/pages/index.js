import React from 'react';
import { graphql, Link } from 'gatsby';
import { PropTypes } from 'prop-types';
import Img from 'gatsby-image';
import SEO from '../components/seo';
import containerStyles from '../components/container.module.css';
import blogPageStyles from './blogPage.module.css';
import pageStyles from './page.module.css';

import Layout from '../components/layout';

const IndexPage = ({ data }) => {
  const first3Nodes = data.allMarkdownRemark.edges.map((edge) => edge.node);
  return (
    <Layout>
      <SEO title="Home" />
      <h3 className={pageStyles.contentTitle}>Blog Posts</h3>
      <div className={containerStyles.container}>
        {first3Nodes.map((node) => (
          <Link to={node.fields.slug} className={blogPageStyles.linkContainer}>
            <Img fixed={node.frontmatter.image.childImageSharp.fixed} />
            <div style={{ marginLeft: '2rem' }}>
              <h1 style={{ marginBottom: '1rem', textDecoration: 'underline' }}>{node.frontmatter.title}</h1>
              <p style={{ marginBottom: '.5rem', color: '#a30000', fontWeight: 'bold' }}>{node.frontmatter.publishDate}</p>
              <p style={{ color: 'black', fontStyle: 'italic' }}>
                {node.frontmatter.tagline}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default IndexPage;

export const query = graphql`
   query {
     allMarkdownRemark(
       limit: 3
       filter: { frontmatter: { type: { eq: "blog-posts"} } },
       sort: { fields: [frontmatter___publishDate], order: DESC }
     ) {
       totalCount
       edges {
         node {
           id
           frontmatter {
             title
             publishDate
             tagline
             image {
              childImageSharp {
                fixed(width: 150, height: 150, quality: 90) {
                  ...GatsbyImageSharpFixed
                }
              }
             }
           }
           excerpt(format: HTML, pruneLength: 250)
           fields {
             slug
           }
         }
       }
     }
   }
 `;
