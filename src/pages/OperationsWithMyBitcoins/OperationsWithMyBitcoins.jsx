import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';

import { buyBitcoin } from '../../redux/actions';
import { BIG_BITCOIN_PRICE } from '../../constants';
import createOperationsHistory from '../../utils/createOperationsHistory';

import GlobalStyles from '../../globalStyles';

const OperationsWithMyBitcoins = ({ isBuyPage, operationsHistory, setOperationsHistory }) => {
  const classes = GlobalStyles();
  const dispatch = useDispatch();
  const { dollars, bitcoins, bitcoinRate } = useSelector((state) => state.wallet);

  const handleChangeBitcoinsScore = useCallback(() => {
    if (!isBuyPage ? bitcoins >= 1 : true) {
      const data = !isBuyPage ? {
        bitcoins: bitcoins - 1,
        dollars: dollars + bitcoinRate,
      } : {
        bitcoins: bitcoins + 1,
        dollars: dollars - bitcoinRate,
      };
      const title = `${!isBuyPage ? 'Sell' : 'Purchased'} Bitcoin`;
      dispatch(buyBitcoin(data));
      createOperationsHistory(title, operationsHistory, setOperationsHistory);
    }
  }, [
    bitcoinRate, bitcoins, dispatch, dollars, isBuyPage, operationsHistory, setOperationsHistory,
  ]);

  return (
    <div className="page-container">
      <div className="title">
        <h2>
          Bitcoin price is&nbsp;
          <span>{bitcoinRate}</span>
          &#36;
        </h2>
      </div>
      <div className="score">
        <h2>
          {
            (bitcoinRate < BIG_BITCOIN_PRICE)
            && (isBuyPage
              ? 'Prices are low, buy more!'
              : 'Prices are low, are you sure you want to sell?')
          }
          {
            (bitcoinRate >= BIG_BITCOIN_PRICE)
            && (isBuyPage
              ? 'Prices are high, are you sure that you want to buy?'
              : 'Prices are high, sell now!')
          }
        </h2>
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={isBuyPage ? handleChangeBitcoinsScore : handleChangeBitcoinsScore}
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

export default React.memo(OperationsWithMyBitcoins);
