import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import PageTitle from '../../components/PageTitle';
import SubTitle from '../../components/SubTitle';
import MainButton from '../../components/MainButton';
import ErrorField from '../../components/ErrorField';

import { buyBitcoin } from '../../redux/actions';
import { BIG_BITCOIN_PRICE } from '../../constants';
import createOperationsHistory from '../../utils/createOperationsHistory';

const SellBitcoin = ({ operationsHistory, setOperationsHistory }) => {
  const dispatch = useDispatch();
  const { dollars, bitcoins, bitcoinRate } = useSelector((state) => state.wallet);

  const handleChangeBitcoinsScore = useCallback(() => {
    if (bitcoins >= 1) {
      const data = {
        bitcoins: bitcoins - 1,
        dollars: dollars + bitcoinRate,
      };
      const title = 'Sell Bitcoin';
      dispatch(buyBitcoin(data));
      createOperationsHistory(title, operationsHistory, setOperationsHistory);
    }
  }, [
    bitcoinRate, bitcoins, dispatch, dollars, operationsHistory, setOperationsHistory,
  ]);

  return (
    <div className="page-container">
      <PageTitle title={`Bitcoin price is ${bitcoinRate} $`} />
      <SubTitle
        subTitleMessage={
          `Prices are ${bitcoinRate >= BIG_BITCOIN_PRICE
            ? 'high, sell now!'
            : 'low, are you sure you want to sell?'}`
        }
      />
      <MainButton
        handler={handleChangeBitcoinsScore}
        isDisable={bitcoins < 1}
        title="Sell 1 Bitcoin"
      />
      <ErrorField
        value={bitcoins}
        threshold={1}
        errorMessage="You don't have bitcoins"
      />
    </div>
  );
};

SellBitcoin.propTypes = {
  operationsHistory: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  setOperationsHistory: PropTypes.func.isRequired,
};

export default React.memo(SellBitcoin);
