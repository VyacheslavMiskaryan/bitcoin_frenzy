import React from 'react';
import PropTypes from 'prop-types';

import './styles.sass';

const SubTitle = ({ subTitleMessage }) => (
  <div className="score">
    <h2>{subTitleMessage}</h2>
  </div>
);

SubTitle.propTypes = {
  subTitleMessage: PropTypes.string.isRequired,
};

export default SubTitle;
