import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import sidebarStyles from './sidebar.module.css';
import Image from './image';

const Sidebar = ({ siteTitle, siteDescription }) => (
  <sidebar>
    <div className={sidebarStyles.sidebarGroup}>
      <div className={sidebarStyles.avatarGroup}>
        <div className={sidebarStyles.avatarImageContainer}>
          <Image />
        </div>
        <div className={sidebarStyles.avatarTextContainer}>
          <h3 style={{ margin: 0, marginTop: '1rem' }}>
            <Link
              to="/"
            >
              {siteTitle}
            </Link>
          </h3>
          <p className={sidebarStyles.subtitle}>{siteDescription}</p>
          <div>
            <p style={{ marginBottom: '1rem', fontSize: '1.15rem' }}>
              <Link to="/about/">
            About Me
              </Link>
              {' '}
          |
              {' '}
              <Link to="/projects/">
            Portfolio
              </Link>
            </p>
          </div>
        </div>
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
