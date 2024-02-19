import PropTypes from 'prop-types';
import React from 'react';
import * as chipStyles from './chip.module.css';

const Chip = ({ text }) => (
  <div className={chipStyles.chipContainer}>
    <p className={chipStyles.chipText}>{text}</p>
  </div>
);

Chip.propTypes = {
  text: PropTypes.string,
};

Chip.defaultProps = {
  siteTitle: '',
  siteDescription: '',
};

export default Chip;
