import React from 'react';
import SEO from '../components/seo';
import pageStyles from './page.module.css';
import Layout from '../components/layout';

const ProjectsPage = () => (
  <Layout>
    <SEO title="Home" />
    <h3 className={pageStyles.contentTitle}>Portfolio</h3>
  </Layout>
);

export default ProjectsPage;
