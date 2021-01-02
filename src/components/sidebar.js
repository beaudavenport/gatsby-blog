import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import sidebarStyles from './sidebar.module.css';
import Image from './image';

const Sidebar = ({ siteTitle, siteDescription }) => (
  <sidebar className={sidebarStyles.avatarGroup}>
    <div className={sidebarStyles.avatarImageContainer}>
      <Image />
    </div>
    <div className={sidebarStyles.avatarTextContainer}>
      <h2 className={sidebarStyles.avatarName}>
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </h2>
      <p className={sidebarStyles.subtitle}>{siteDescription}</p>
      <div className={sidebarStyles.linkContainer}>
        <p style={{ marginBottom: '0.5rem' }}>
          <Link
            to="/"
            style={{ textDecoration: 'underline' }}
          >
            Home
            {' '}
          </Link>
        </p>
        <p style={{ marginBottom: '0.5rem' }}>
          <Link
            to="/blog/"
            style={{ textDecoration: 'underline' }}
          >
            Blog
            {' '}
          </Link>
        </p>
        <p>
          <Link
            to="/portfolio/"
            style={{ textDecoration: 'underline' }}
          >
            Portfolio
            {' '}
          </Link>
        </p>
      </div>
    </div>
  </sidebar>
);

Sidebar.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
};

Sidebar.defaultProps = {
  siteTitle: '',
  siteDescription: '',
};

export default Sidebar;
