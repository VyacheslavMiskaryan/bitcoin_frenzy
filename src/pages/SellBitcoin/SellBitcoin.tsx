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

const SellBitcoin = (): JSX.Element => {
  const dispatch = useDispatch();
  const {
    dollars, bitcoins, bitcoinRate, operationsHistory,
  } = useSelector((state: RootState) => state.wallet);

  const handleChangeBitcoinsScore = useCallback(() => {
    if (bitcoins >= 1) {
      const title = 'Sell Bitcoin';
      const data: DataType = {
        bitcoins: bitcoins - 1,
        dollars: dollars + bitcoinRate,
        operationsHistory: createHistoryItem(title, operationsHistory),
      };
      dispatch(changeTheAmountOfBitcoins(data));
    }
  }, [
    bitcoinRate, bitcoins, dispatch, dollars, operationsHistory,
  ]);

  return (
    <PageContainer>
      <>
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
      </>
    </PageContainer>
  );
};

export default React.memo(SellBitcoin);
