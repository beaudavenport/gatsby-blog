import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import './layout.css';
import layoutStyles from './layout.module.css';

import Sidebar from './sidebar';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <div>
      <div className={layoutStyles.mainGrid}>
        <Sidebar
          siteTitle={data.site.siteMetadata.title}
          siteDescription={data.site.siteMetadata.description}
        />
        <main className={layoutStyles.contentContainer}>
          {children}
        </main>
      </div>
      <footer className={layoutStyles.footer}>
          © Beau Davenport,
        {' '}
        {new Date().getFullYear()}
 . Built with
        {' '}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
