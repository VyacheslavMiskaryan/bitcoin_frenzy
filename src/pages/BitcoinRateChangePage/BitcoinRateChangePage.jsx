import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@material-ui/core';

import { changeBitcoinPrice } from '../../redux/actions';
import createOperationsHistory from '../../utils/createOperationsHistory';
import globalStyles from '../../globalStyles';
import BitcoinRateChangePageMaterialStyles from './BitcoinRateChangeMaterialStyles';
import './BitcoinRateChangePageStyles.sass';

const BitcoinRateChangePage = ({ operationsHistory, setOperationsHistory }) => {
  const global = globalStyles();
  const classes = BitcoinRateChangePageMaterialStyles();
  const dispatch = useDispatch();
  const { bitcoinRate } = useSelector((state) => state.wallet);

  const handleIncreaseBitcoinPrice = useCallback(() => {
    dispatch(changeBitcoinPrice({ rate: bitcoinRate + 1000 }));
    const title = 'Increase Bitcoin price by 1,000$';
    createOperationsHistory(title, operationsHistory, setOperationsHistory);
  }, [bitcoinRate, dispatch, operationsHistory, setOperationsHistory]);

  const handleDecreaseBitcoinPrice = useCallback(() => {
    if (bitcoinRate >= 1000) {
      dispatch(changeBitcoinPrice({ rate: bitcoinRate - 1000 }));
      const title = 'Decreased Bitcoin price by 1,000$';
      createOperationsHistory(title, operationsHistory, setOperationsHistory);
    }
  }, [bitcoinRate, dispatch, operationsHistory, setOperationsHistory]);

  return (
    <div className="page-container">
      <div className="title">
        <h2>
          Bitcoin price is
          {' '}
          {bitcoinRate}
          {' '}
          $
        </h2>
      </div>
      <div className="rate-manager">
        <Button
          className={[global.button, classes.rateButton].join(' ')}
          variant="contained"
          color="primary"
          onClick={handleIncreaseBitcoinPrice}
        >
          Increase Bitcoin Price (+1,000)
        </Button>
        <Button
          className={[global.button, classes.rateButton].join(' ')}
          variant="contained"
          color="primary"
          onClick={handleDecreaseBitcoinPrice}
          disabled={(bitcoinRate <= 1000)}
        >
          Decrease Bitcoin Price (-1,000)
        </Button>
      </div>
      <div className="error-field">
        {(bitcoinRate <= 1000) && <span>The minimum bitcoin price is 1000$</span>}
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

export default BitcoinRateChangePage;
