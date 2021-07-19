import React from 'react';
import PropTypes from 'prop-types';

import './styles.sass';

const ErrorField = ({ value, threshold, errorMessage }) => (
  <div className="error-area">
    {(value < threshold) && <span>{errorMessage}</span>}
  </div>
);

ErrorField.propTypes = {
  value: PropTypes.number.isRequired,
  threshold: PropTypes.number.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

export default ErrorField;
