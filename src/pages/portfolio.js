import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import SEO from '../components/seo';
import Layout from '../components/layout';
import containerStyles from '../components/container.module.css';
import pageStyles from './page.module.css';
import portfolioStyles from './portfolio.module.css';

const ProjectsPage = ({ data }) => {
  const projectNodes = data.allMarkdownRemark.edges.map((edge) => edge.node);
  return (
    <Layout>
      <SEO title="Portfolio" />
      <h6 className={pageStyles.breadcrumbs}>
        <Link to="/">Home</Link>
        {' / '}
        <Link to="/portfolio/">Portfolio</Link>
      </h6>
      <div className={containerStyles.container}>
        <div className={portfolioStyles.container}>
          {projectNodes.map((node) => (
            <Link to={node.fields.slug} className={portfolioStyles.linkContainer}>
              <div className={portfolioStyles.textContainer}>
                <h1 className={portfolioStyles.title}>{node.frontmatter.title}</h1>
                <p className={portfolioStyles.caption}>
                  {node.frontmatter.caption}
                </p>
              </div>
              <Img
                className={portfolioStyles.thumbnailContainer}
                fluid={node.frontmatter.thumbnail.childImageSharp.fluid}
              />
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

ProjectsPage.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default ProjectsPage;

export const query = graphql`
   query {
     allMarkdownRemark(
       filter: { frontmatter: { type: { eq: "projects"} } },
       sort: { fields: [frontmatter___publishDate], order: DESC }
     ) {
       totalCount
       edges {
         node {
           id
           frontmatter {
             title
             caption
             thumbnail {
              childImageSharp {
                fluid(maxWidth: 400, quality: 90) {
                  ...GatsbyImageSharpFluid
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
