import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import SEO from '../components/seo';
import pageStyles from './page.module.css';
import Layout from '../components/layout';


const ProjectsPage = ({ data }) => {
  const projectNodes = data.allMarkdownRemark.edges.map((edge) => edge.node);

  return (
    <Layout>
      <SEO title="Home" />
      <p className={pageStyles.contentTitle}>Portfolio</p>
      {projectNodes.map((projectNode) => (
        <div>
          <Link to={projectNode.fields.slug}>
            <p>{projectNode.frontmatter.title}</p>
          </Link>
        </div>
      ))}
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
