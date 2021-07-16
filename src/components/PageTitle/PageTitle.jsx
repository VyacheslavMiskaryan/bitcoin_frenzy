import React from 'react';
import PropTypes from 'prop-types';

import './PageTitleStyles.sass';

const PageTitle = ({ title }) => (
  <div className="title">
    <h2>{title}</h2>
  </div>
);

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
