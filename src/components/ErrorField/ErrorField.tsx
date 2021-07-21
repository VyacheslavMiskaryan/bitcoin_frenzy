import React from 'react';

import './styles.sass';

type ErrorFieldType = {
  value: number,
  threshold: number,
  errorMessage: string,
}

const ErrorField = ({ value, threshold, errorMessage }: ErrorFieldType): JSX.Element => (
  <div className="error-area">
    {(value < threshold) && <span>{errorMessage}</span>}
  </div>
);

export default ErrorField;
