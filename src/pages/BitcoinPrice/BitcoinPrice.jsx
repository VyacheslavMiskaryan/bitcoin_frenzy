import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import PageTitle from '../../components/PageTitle';
import MainButton from '../../components/MainButton';
import ErrorField from '../../components/ErrorField';

import { changeBitcoinPrice } from '../../redux/actions';
import { DEFAULT_BITCOIN_PRICE } from '../../constants';
import createOperationsHistory from '../../utils/createOperationsHistory';

import './BitcoinPriceStyles.sass';

const BitcoinPrice = ({ operationsHistory, setOperationsHistory }) => {
  const dispatch = useDispatch();
  const { bitcoinRate } = useSelector((state) => state.wallet);

  const handleChangeRate = useCallback((isDecrease) => {
    const isCheckActive = isDecrease ? bitcoinRate >= DEFAULT_BITCOIN_PRICE : true;
    if (isCheckActive) {
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
      <PageTitle title={`Bitcoin price is ${bitcoinRate} $`} />
      <div className="rate-manager">
        <MainButton
          handler={handleChangeRate}
          isPriceButton
          title="Increase Bitcoin Price (+1,000)"
        />
        <MainButton
          handler={handleChangeRate}
          handlerArgument
          isDisable={bitcoinRate <= DEFAULT_BITCOIN_PRICE}
          isPriceButton
          title="Decrease Bitcoin Price (-1,000)"
        />
      </div>
      <ErrorField
        value={bitcoinRate}
        threshold={DEFAULT_BITCOIN_PRICE * 2}
        errorMessage="The minimum bitcoin price is 1000&#36;"
      />
    </div>
  );
};

BitcoinPrice.propTypes = {
  operationsHistory: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  setOperationsHistory: PropTypes.func.isRequired,
};

export default React.memo(BitcoinPrice);
