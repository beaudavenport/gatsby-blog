import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import headerStyles from './header.module.css';

import Header from './header';

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
    <div className={headerStyles.mainContainer}>
      <div className={headerStyles.mainGrid}>
        <Header siteTitle={data.site.siteMetadata.title} siteDescription={data.site.siteMetadata.description} />
        <main>{children}</main>
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
