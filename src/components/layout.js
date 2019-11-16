import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Header from './header';
import './layout.css';


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        <nav>
          <Link
            to="/"
            activeClassName="active"
            activeStyle={{ borderBottom: '2px solid orange' }}
          >
            Blog
          </Link>
          <Link
            to="/about/"
            activeStyle={{ borderBottom: '2px solid orange' }}
          >
            About
          </Link>
          <Link
            to="/projects/"
            activeStyle={{ borderBottom: '2px solid orange' }}
          >
            Projects
          </Link>
        </nav>
        <main>{children}</main>
        <footer>
          ©
          {' '}
          {new Date().getFullYear()}
, Built with
          {' '}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
