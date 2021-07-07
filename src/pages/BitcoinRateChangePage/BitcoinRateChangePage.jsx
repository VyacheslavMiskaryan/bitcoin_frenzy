import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@material-ui/core';

import { changeBitcoinPrice } from '../../redux/actions';
import { DEFAULT_BITCOIN_PRICE } from '../../constants';
import createOperationsHistory from '../../utils/createOperationsHistory';

import globalStyles from '../../globalStyles';
import BitcoinRateChangePageMaterialStyles from './BitcoinRateChangeMaterialStyles';
import './BitcoinRateChangePageStyles.sass';

const BitcoinRateChangePage = ({ operationsHistory, setOperationsHistory }) => {
  const global = globalStyles();
  const classes = BitcoinRateChangePageMaterialStyles();
  const dispatch = useDispatch();
  const { bitcoinRate } = useSelector((state) => state.wallet);

  const handleChangeRate = useCallback((isDecrease) => {
    if (isDecrease ? bitcoinRate >= DEFAULT_BITCOIN_PRICE : true) {
      const data = {
        rate: isDecrease ? bitcoinRate - DEFAULT_BITCOIN_PRICE
          : bitcoinRate + DEFAULT_BITCOIN_PRICE,
      };
      const title = `${isDecrease ? 'Decreased' : 'Increase'} Bitcoin price by 1,000$`;
      dispatch(changeBitcoinPrice(data));
      createOperationsHistory(title, operationsHistory, setOperationsHistory);
    }
  }, [bitcoinRate, dispatch, operationsHistory, setOperationsHistory]);

  return (
    <div className="page-container">
      <div className="title">
        <h2>
          Bitcoin price is&ensp;
          {bitcoinRate}
          &ensp;&#36;
        </h2>
      </div>
      <div className="rate-manager">
        <Button
          className={[global.button, classes.rateButton].join(' ')}
          variant="contained"
          color="primary"
          onClick={() => handleChangeRate(false)}
        >
          Increase Bitcoin Price (+1,000)
        </Button>
        <Button
          className={[global.button, classes.rateButton].join(' ')}
          variant="contained"
          color="primary"
          onClick={() => handleChangeRate(true)}
          disabled={(bitcoinRate <= DEFAULT_BITCOIN_PRICE)}
        >
          Decrease Bitcoin Price (-1,000)
        </Button>
      </div>
      <div className="error-field">
        {(bitcoinRate <= DEFAULT_BITCOIN_PRICE) && <span>The minimum bitcoin price is 1000$</span>}
      </div>
    </div>
  );
};

BitcoinRateChangePage.propTypes = {
  operationsHistory: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  setOperationsHistory: PropTypes.func.isRequired,
};

export default React.memo(BitcoinRateChangePage);
