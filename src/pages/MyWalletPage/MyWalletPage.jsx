import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';

import { deposit } from '../../redux/actions';
import createOperationsHistory from '../../utils/createOperationsHistory';
import GlobalStyles from '../../globalStyles';

const MyWalletPage = ({ operationsHistory, setOperationsHistory }) => {
  const classes = GlobalStyles();
  const dispatch = useDispatch();
  const { dollars, bitcoins } = useSelector((state) => state.wallet);

  const handleMakeDeposit = useCallback(() => {
    dispatch(deposit({ deposit: dollars + 100 }));
    const title = '100$ Deposit';
    createOperationsHistory(title, operationsHistory, setOperationsHistory);
  }, [dispatch, dollars, operationsHistory, setOperationsHistory]);

  const handleMakeWithdraw = useCallback(() => {
    if (dollars >= 100) {
      dispatch(deposit({ deposit: dollars - 100 }));
      const title = '100$ Withdraw';
      createOperationsHistory(title, operationsHistory, setOperationsHistory);
    }
  }, [dispatch, dollars, operationsHistory, setOperationsHistory]);

  return (
    <div className="page-container">
      <div className="title">
        <h2>Your Bitcoin wallet</h2>
      </div>
      <div className="score">
        <h2>
          You now own
          {' '}
          {bitcoins}
          {' '}
          Bitcoins
        </h2>
      </div>
      <div className="page-manager">
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleMakeDeposit}
        >
          Deposit 100$
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleMakeWithdraw}
          disabled={dollars < 100}
        >
          Withdraw 100$
        </Button>
      </div>
      <div className="error-field">
        {(dollars < 100) && <span>You cannot withdraw less than 100$</span>}
      </div>
    </div>
  );
};

MyWalletPage.propTypes = {
  operationsHistory: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  setOperationsHistory: PropTypes.func.isRequired,
};

export default MyWalletPage;
