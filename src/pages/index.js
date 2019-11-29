import React from 'react';
import { graphql, Link } from 'gatsby';
import { PropTypes } from 'prop-types';
import moment from 'moment';
import SEO from '../components/seo';
import containerStyles from '../components/container.module.css';
import Layout from '../components/layout';

const IndexPage = ({ data }) => {
  const first3Nodes = data.allMarkdownRemark.edges.map((edge) => edge.node);
  return (
    <Layout>
      <SEO title="Home" />
      <div className={containerStyles.container}>
        {first3Nodes.map((node) => (
          <Link to={node.fields.slug}>
            <h1 style={{ marginBottom: '1rem' }}>{node.frontmatter.title}</h1>
            <p>
              {moment(node.frontmatter.publishDate).format('MMM Do, YYYY')}
              {' '}
              |
              {' '}
              {node.frontmatter.tagline}
            </p>
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
