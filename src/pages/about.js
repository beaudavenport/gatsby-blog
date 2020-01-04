import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import pageStyles from './page.module.css';

const AboutPage = () => (
  <Layout>
    <SEO title="About Me" />
    <h3 className={pageStyles.contentTitle}>About Me</h3>
    <p>
      Hey there! My name is Beau, and I’m a software engineer in St. Louis, Missouri.
      I specialize in React.js, React-Native, SSG technologies (like Gatsby), node.js,
      and cloud infrastructure.
    </p>
    <p>
      <strong>Stay Connected: </strong>
    Follow me on
      {' '}
      <a href="https://twitter.com/beau_dav">twitter</a>
      , checkout my code on
      {' '}
      <a href="https://github.com/beaudavenport">github</a>
      , or download my
      {' '}
      <a href="https://github.com/beaudavenport">resume</a>
.
    </p>
  </Layout>
);

export default AboutPage;
