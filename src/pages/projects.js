import React from 'react';
import SEO from '../components/seo';
import containerStyles from '../components/container.module.css';
import Layout from '../components/layout';

const ProjectsPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={containerStyles.container}>
      <div>Here I am</div>
    </div>
  </Layout>
);

export default ProjectsPage;
