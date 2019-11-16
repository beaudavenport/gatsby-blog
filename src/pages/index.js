import React from 'react';
import { graphql, Link } from 'gatsby';
import { PropTypes } from 'prop-types';
import SEO from '../components/seo';
import containerStyles from '../components/container.module.css';
import Layout from '../components/layout';

const IndexPage = ({ data }) => {
  const first3Nodes = data.allMarkdownRemark.edges.map((edge) => edge.node);
  return (
    <Layout>
      <SEO title="Home" />
      <div className={containerStyles.container}>
        <div>Here I am</div>
        {first3Nodes.map((node) => (
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
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
