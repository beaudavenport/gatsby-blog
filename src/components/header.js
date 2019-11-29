import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import headerStyles from './header.module.css';
import Image from './image';

const Header = ({ siteTitle, siteDescription }) => (
  <header
    style={{
      marginBottom: '1.45rem',
      display: 'flex',
      margin: '0 auto',
      maxWidth: 960,
      padding: '1.45rem 1.0875rem',
    }}
  >
    <div style={{ flex: 1 }}>
      <Image />
      <ul>
        <li className={headerStyles.socialLink}><a href="https://twitter.com/beau_dav">@beau_dav</a></li>
        <li className={headerStyles.socialLink}><a href="https://github.com/beaudavenport">beaudavenport</a></li>
      </ul>
    </div>
    <div style={{ flex: 2 }}>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h3>
        {siteDescription}
      </h3>
      <nav style={{ display: 'flex' }}>
        <Link
          to="/"
          className={headerStyles.link}
          activeClassName="active"
          activeStyle={{ borderBottom: '2px solid orange' }}
        >
            Blog
        </Link>
        <Link
          to="/about/"
          className={headerStyles.link}
          activeStyle={{ borderBottom: '2px solid orange' }}
        >
            About
        </Link>
        <Link
          to="/projects/"
          className={headerStyles.link}
          activeStyle={{ borderBottom: '2px solid orange' }}
        >
            Projects
        </Link>
      </nav>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
  siteDescription: '',
};

export default Header;
