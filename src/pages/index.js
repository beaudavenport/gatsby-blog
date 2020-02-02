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
      <p className={pageStyles.contentTitle}>Blog</p>
      <div className={containerStyles.container}>
        {first3Nodes.map((node) => (
          <Link to={node.fields.slug} className={blogPageStyles.linkContainer}>
            <Img className={blogPageStyles.thumbnailContainer} fixed={node.frontmatter.image.childImageSharp.fixed} />
            <div className={blogPageStyles.textContainer}>
              <h1 className={blogPageStyles.title}>{node.frontmatter.title}</h1>
              <p className={blogPageStyles.date}>{node.frontmatter.publishDate}</p>
              <p className={blogPageStyles.caption}>
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
