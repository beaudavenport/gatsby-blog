import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
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
    <div className={layoutStyles.mainContainer}>
      <div className={layoutStyles.mainGrid}>
        <Sidebar
          siteTitle={data.site.siteMetadata.title}
          siteDescription={data.site.siteMetadata.description}
        />
        <main>
          {children}
        </main>
      </div>
      <footer style={{ textAlign: 'center' }}>
          ©
        {' '}
        {new Date().getFullYear()}
, Built with
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
