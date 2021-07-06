import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';

import { buyBitcoin } from '../../redux/actions';
import OperationsWithMyBitcoinsMaterialStyles from './OperationsWithMyBitcoinsMaterialStyles';
import './OperationsWithMyBitcoins.sass';

const OperationsWithMyBitcoins = ({ isBuyPage }) => {
  const classes = OperationsWithMyBitcoinsMaterialStyles();
  const dispatch = useDispatch();
  const { dollars, bitcoins, bitcoinRate } = useSelector((state) => state.wallet);

  const handleBuyBitcoin = () => {
    if (dollars >= bitcoinRate) {
      dispatch(buyBitcoin({
        bitcoins: bitcoins + 1,
        dollars: dollars - bitcoinRate,
      }));
    }
  };

  const handleSellBitcoin = () => {
    if (bitcoins >= 1) {
      dispatch(buyBitcoin({
        bitcoins: bitcoins - 1,
        dollars: dollars + bitcoinRate,
      }));
    }
  };

  return (
    <div className="buy-bitcoin-area">
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
    </div>
  );
};

OperationsWithMyBitcoins.propTypes = {
  isBuyPage: PropTypes.bool.isRequired,
};

export default OperationsWithMyBitcoins;
