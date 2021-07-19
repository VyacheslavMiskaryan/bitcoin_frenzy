import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';

import Styles from './styles';

const MainButton = ({
  handler, handlerArgument, isDisable, title, isPriceButton,
}) => {
  const classes = Styles();

  return (
    <Button
      className={[classes.button, isPriceButton && classes.priceButton].join(' ')}
      variant="contained"
      color="primary"
      onClick={() => handler(handlerArgument)}
      disabled={isDisable}
    >
      {title}
    </Button>
  );
};

MainButton.propTypes = {
  handler: PropTypes.func.isRequired,
  handlerArgument: PropTypes.bool,
  isDisable: PropTypes.bool,
  title: PropTypes.string.isRequired,
  isPriceButton: PropTypes.bool,
};

MainButton.defaultProps = {
  isDisable: false,
  handlerArgument: false,
  isPriceButton: false,
};

export default MainButton;
