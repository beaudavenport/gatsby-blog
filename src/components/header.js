import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import headerStyles from './header.module.css';
import Image from './image';

const Header = ({ siteTitle, siteDescription }) => (
  <header className={headerStyles.container}>
    <div className={headerStyles.headerGroup}>
      <div>
        <Image />
      </div>
      <div>
        <h3 style={{ margin: 0, marginTop: '1rem' }}>
          <Link
            to="/"
          >
            {siteTitle}
          </Link>
        </h3>
        <p style={{ marginBottom: '1rem' }}>
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
    </div>
    <div>
      <p style={{ marginBottom: '1rem' }}>
        {siteDescription}
      </p>
      <nav style={{ display: 'flex', justifyContent: 'center' }}>
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
