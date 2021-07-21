import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  PageContainer,
  PageTitle,
  SubTitle,
  MainButton,
  ErrorField,
} from '../../components';

import OperationType from '../../types';
import { RootState } from '../../redux/store/store';
import { changeTheAmountOfBitcoins } from '../../redux/actions';
import { BIG_BITCOIN_PRICE } from '../../constants';
import createHistoryItem from '../../utils';

type DataType = {
  bitcoins: number,
  dollars: number,
  operationsHistory: OperationType[],
}

const BuyBitcoinPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const {
    dollars, bitcoins, bitcoinRate, operationsHistory,
  } = useSelector((state: RootState) => state.wallet);

  const handleChangeBitcoinsScore = useCallback(() => {
    if (dollars >= bitcoinRate) {
      const title = 'Purchased Bitcoin';
      const data: DataType = {
        bitcoins: bitcoins + 1,
        dollars: dollars - bitcoinRate,
        operationsHistory: createHistoryItem(title, operationsHistory),
      };
      dispatch(changeTheAmountOfBitcoins(data));
    }
  }, [bitcoinRate, bitcoins, dispatch, dollars, operationsHistory]);

  return (
    <PageContainer>
      <>
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
      </>
    </PageContainer>
  );
};

export default React.memo(BuyBitcoinPage);
