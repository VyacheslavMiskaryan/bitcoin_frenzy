import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  PageContainer,
  PageTitle,
  SubTitle,
  MainButton,
  ErrorField,
} from '../../components';

import { changeTheAmountOfBitcoins } from '../../redux/actions';
import { BIG_BITCOIN_PRICE } from '../../constants';
import utils from '../../utils';

const SellBitcoin = () => {
  const dispatch = useDispatch();
  const {
    dollars, bitcoins, bitcoinRate, operationsHistory,
  } = useSelector((state) => state.wallet);

  const handleChangeBitcoinsScore = useCallback(() => {
    if (bitcoins >= 1) {
      const data = {
        bitcoins: bitcoins - 1,
        dollars: dollars + bitcoinRate,
      };
      const title = 'Sell Bitcoin';
      data.history = utils(title, operationsHistory);
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
