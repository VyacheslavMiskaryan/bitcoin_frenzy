/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';

import { deposit } from '../../redux/actions';
import MyWalletPageMaterialStyles from './MyWalletPageMaterialStyles';
import './MyWalletPageStyles.sass';

const MyWalletPage = ({ operationsHistory, setOperationsHistory }) => {
  const classes = MyWalletPageMaterialStyles();
  const dispatch = useDispatch();
  const { dollars, bitcoins } = useSelector((state) => state.wallet);

  const handleMakeDeposit = () => {
    dispatch(deposit({ deposit: dollars + 100 }));
    const newOperation = {
      id: operationsHistory.length,
      title: '100$ Deposit',
    };
    setOperationsHistory([...operationsHistory, newOperation]);
  };
  console.log('operationsHistory', operationsHistory);
  const handleMakeWithdraw = () => {
    if (dollars >= 100) {
      dispatch(deposit({ deposit: dollars - 100 }));
    }
  };

  return (
    <div className="my-wallet-area">
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
      <div className="wallet-manager">
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
    </div>
  );
};

MyWalletPage.propTypes = {
  setOperationsHistory: PropTypes.func.isRequired,
};

export default MyWalletPage;
