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
      <h3 className={sidebarStyles.avatarName}>
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </h3>
      <p className={sidebarStyles.subtitle}>{siteDescription}</p>
      <div>
        <p>
          <Link to="/about/">
            About Me
          </Link>
          <span className={sidebarStyles.pipe}>
            {' '}
            |
            {' '}
          </span>
          <Link to="/portfolio/">
            Portfolio
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
