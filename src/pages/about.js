import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage = () => (
  <Layout>
    <SEO title="About Me" />
    <h1>Hi from the second page</h1>
    <div>
      <p style={{ marginBottom: '1rem', textAlign: 'center', fontSize: '1.15rem' }}>
        <a href="https://twitter.com/beau_dav">twitter</a>
        {' '}
          |
        {' '}
        <a href="https://github.com/beaudavenport">github</a>
        {' '}
          |
        {' '}
        <a href="https://github.com/beaudavenport">resume</a>
      </p>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default AboutPage;
