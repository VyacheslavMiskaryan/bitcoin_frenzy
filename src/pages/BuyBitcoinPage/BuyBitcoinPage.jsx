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

const BuyBitcoinPage = ({ operationsHistory, setOperationsHistory }) => {
  const dispatch = useDispatch();
  const { dollars, bitcoins, bitcoinRate } = useSelector((state) => state.wallet);

  const handleChangeBitcoinsScore = useCallback(() => {
    if (dollars >= bitcoinRate) {
      const data = {
        bitcoins: bitcoins + 1,
        dollars: dollars - bitcoinRate,
      };
      const title = 'Purchased Bitcoin';
      dispatch(buyBitcoin(data));
      createOperationsHistory(title, operationsHistory, setOperationsHistory);
    }
  }, [bitcoinRate, bitcoins, dispatch, dollars, operationsHistory, setOperationsHistory]);

  return (
    <div className="page-container">
      <PageTitle title={`Bitcoin price is ${bitcoinRate} $`} />
      <SubTitle
        subTitleMessage={
          `Prices are ${bitcoinRate < BIG_BITCOIN_PRICE
            ? 'low, buy more!'
            : 'high, are you sure that you want to buy?'}`
        }
      />
      <MainButton
        handler={handleChangeBitcoinsScore}
        isDisable={dollars < bitcoinRate}
        title="Buy 1 Bitcoin"
      />
      <ErrorField
        value={dollars}
        threshold={bitcoinRate}
        errorMessage="You don't have enough money to buy one bitcoin"
      />
    </div>
  );
};

BuyBitcoinPage.propTypes = {
  operationsHistory: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  setOperationsHistory: PropTypes.func.isRequired,
};

export default React.memo(BuyBitcoinPage);
