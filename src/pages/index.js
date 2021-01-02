import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import SEO from '../components/seo';
import pageStyles from './page.module.css';
import containerStyles from '../components/container.module.css';
import resume from '../data/files/Resume-2020.pdf';
import { HeroBlogThumbnailRow } from './blog';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h6 className={pageStyles.breadcrumbs}>
      <Link to="/">Home</Link>
    </h6>
    <h1>
      Hey there! My name is Beau, and I’m a software engineer in St. Louis, Missouri.
    </h1>
    <p>
      I specialize in
      {' '}
      <strong>ReactJS</strong>
      ,
      {' '}
      <strong>React-Native</strong>
      ,
      {' '}
      <strong>SSG technologies </strong>
      (like
      {' '}
      <strong>Gatsby</strong>
      ),
      {' '}
      <strong>NodeJS</strong>
      ,
      {' '}
      and
      {' '}
      <strong>Cloud Infrastructure</strong>
      .
    </p>
    <p>
      <strong>Stay Connected! </strong>
      Follow me on
      {' '}
      <a href="https://twitter.com/beau_dav">twitter</a>
      , checkout my code on
      {' '}
      <a href="https://github.com/beaudavenport">github</a>
      , or download my
      {' '}
      <a href={resume}>resume</a>
      .
    </p>
    <hr />
    <h6 className={pageStyles.subtitle}>Latest Blog Post:</h6>
    <div className={containerStyles.container}>
      <HeroBlogThumbnailRow node={data.allMarkdownRemark.edges[0].node} />
    </div>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 1
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
            heroImage: image {
              childImageSharp {
                fixed(width: 250, height: 250, quality: 90) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            excerpt
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
