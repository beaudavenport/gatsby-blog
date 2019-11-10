import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import containerStyles from '../components/container.module.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={containerStyles.container}>
      <div>Here I am</div>
    </div>
  </Layout>
);

export default IndexPage;
