import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@material-ui/core';

import { changeBitcoinPrice } from '../../redux/actions';

const BitcoinRateChangePage = () => {
  const dispatch = useDispatch();
  const { bitcoinRate } = useSelector((state) => state.wallet);

  const handleIncreaseBitcoinPrice = () => {
    dispatch(changeBitcoinPrice({ rate: bitcoinRate + 1000 }));
  };

  const handleDecreaseBitcoinPrice = () => {
    if (bitcoinRate >= 1000) {
      dispatch(changeBitcoinPrice({ rate: bitcoinRate - 1000 }));
    }
  };

  return (
    <div className="my-wallet-area">
      <div className="title">
        <h2>
          Bitcoin price is
          {' '}
          {bitcoinRate}
          {' '}
          $
        </h2>
      </div>
      <div className="wallet-manager">
        <Button
          variant="contained"
          color="primary"
          onClick={handleIncreaseBitcoinPrice}
        >
          Increase Bitcoin Price (+1,000)
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleDecreaseBitcoinPrice}
          disabled={(bitcoinRate <= 1000)}
        >
          Decrease Bitcoin Price (-1,000)
        </Button>
      </div>
    </div>
  );
};

export default BitcoinRateChangePage;
