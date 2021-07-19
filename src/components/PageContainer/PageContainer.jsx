import React from 'react';
import PropTypes from 'prop-types';

import './styles.sass';

const PageContainer = ({ children }) => (
  <div className="page-container">
    {children}
  </div>
);

PageContainer.propTypes = {
  children: PropTypes.element,
};

PageContainer.defaultProps = {
  children: null,
};

export default PageContainer;
