import React from 'react';

import { Button } from '@material-ui/core';

import Styles from './styles';

type MainButtonTypes = {
  handler: (p: boolean) => void,
  handlerArgument?: boolean,
  isDisable?: boolean,
  title: string,
  isPriceButton?: boolean,
};

const MainButton = ({
  handler, handlerArgument, isDisable, title, isPriceButton,
}: MainButtonTypes): JSX.Element => {
  const classes = Styles();

  return (
    <Button
      className={`${classes.button} ${isPriceButton && classes.priceButton}`}
      variant="contained"
      color="primary"
      onClick={() => handler(handlerArgument as boolean)}
      disabled={isDisable}
    >
      {title}
    </Button>
  );
};

MainButton.defaultProps = {
  isDisable: false,
  handlerArgument: false,
  isPriceButton: false,
};

export default MainButton;
