import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import sidebarStyles from './sidebar.module.css';
import Image from './image';

const Sidebar = ({ siteTitle, siteDescription }) => (
  <sidebar className={sidebarStyles.avatarGroup}>
    <div className={sidebarStyles.avatarImageContainer}>
      <Link to="/">
        <Image />
      </Link>
    </div>
    <div className={sidebarStyles.avatarTextContainer}>
      <h2 className={sidebarStyles.avatarName}>
        <Link to="/">
          {siteTitle}
        </Link>
      </h2>
      <p className={sidebarStyles.subtitle}>{siteDescription}</p>
      <div className={sidebarStyles.linkContainer}>
        <h6>
          <Link to="/">
            Home
          </Link>
        </h6>
        <h6>
          <Link to="/blog/">
            Blog
          </Link>
        </h6>
        <h6>
          <Link to="/portfolio/">
            Portfolio
          </Link>
        </h6>
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
