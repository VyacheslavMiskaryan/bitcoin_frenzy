import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';

import { buyBitcoin } from '../../redux/actions';
import createOperationsHistory from '../../utils/createOperationsHistory';
import GlobalStyles from '../../globalStyles';

const OperationsWithMyBitcoins = ({ isBuyPage, operationsHistory, setOperationsHistory }) => {
  const classes = GlobalStyles();
  const dispatch = useDispatch();
  const { dollars, bitcoins, bitcoinRate } = useSelector((state) => state.wallet);

  const handleBuyBitcoin = useCallback(() => {
    if (dollars >= bitcoinRate) {
      dispatch(buyBitcoin({
        bitcoins: bitcoins + 1,
        dollars: dollars - bitcoinRate,
      }));
      const title = 'Purchased 1 Bitcoin';
      createOperationsHistory(title, operationsHistory, setOperationsHistory);
    }
  }, [bitcoinRate, bitcoins, dispatch, dollars, operationsHistory, setOperationsHistory]);

  const handleSellBitcoin = useCallback(() => {
    if (bitcoins >= 1) {
      dispatch(buyBitcoin({
        bitcoins: bitcoins - 1,
        dollars: dollars + bitcoinRate,
      }));
      const title = 'Sell 1 Bitcoin';
      createOperationsHistory(title, operationsHistory, setOperationsHistory);
    }
  }, [bitcoinRate, bitcoins, dispatch, dollars, operationsHistory, setOperationsHistory]);

  return (
    <div className="page-container">
      <div className="title">
        <h2>
          Bitcoin price
          {' '}
          {bitcoinRate}
          $
        </h2>
      </div>
      <div className="score">
        <h2>
          {
            (bitcoinRate < 10000)
            && (isBuyPage
              ? 'Prices are low, buy more!'
              : 'Prices are low, are you sure you want to sell?')
          }
          {
            (bitcoinRate >= 10000)
            && (isBuyPage
              ? 'Prices are high, are you sure that you want to buy?'
              : 'Prices are high, sell now!')
          }
        </h2>
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={isBuyPage ? handleBuyBitcoin : handleSellBitcoin}
        className={classes.button}
        disabled={isBuyPage ? (dollars < bitcoinRate) : (bitcoins < 1)}
      >
        {isBuyPage ? 'Buy 1 Bitcoin' : 'Sell 1 Bitcoin'}
      </Button>
      <div className="error-field">
        {isBuyPage && (dollars < bitcoinRate)
        && <span>You don&apos;t have enough money to buy one bitcoin</span>}
        {!isBuyPage && (bitcoins < 1) && <span>You do not have bitcoins</span>}
      </div>
    </div>
  );
};

OperationsWithMyBitcoins.propTypes = {
  isBuyPage: PropTypes.bool.isRequired,
  operationsHistory: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  setOperationsHistory: PropTypes.func.isRequired,
};

export default OperationsWithMyBitcoins;
