import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  PageContainer,
  PageTitle,
  MainButton,
  ErrorField,
} from '../../components';

import { changeBitcoinPrice } from '../../redux/actions';
import { DEFAULT_BITCOIN_PRICE } from '../../constants';
import utils from '../../utils';

import './styles.sass';

const BitcoinPrice = () => {
  const dispatch = useDispatch();
  const { bitcoinRate, operationsHistory } = useSelector((state) => state.wallet);

  const handleChangeRate = useCallback((isDecrease) => {
    const isCheckActive = isDecrease ? bitcoinRate >= DEFAULT_BITCOIN_PRICE : true;
    if (isCheckActive) {
      const data = {
        rate: isDecrease ? bitcoinRate - DEFAULT_BITCOIN_PRICE
          : bitcoinRate + DEFAULT_BITCOIN_PRICE,
      };
      const title = `${isDecrease ? 'Decreased' : 'Increase'} Bitcoin price by 1,000$`;
      data.history = utils(title, operationsHistory);
      dispatch(changeBitcoinPrice(data));
    }
  }, [bitcoinRate, dispatch, operationsHistory]);

  return (
    <PageContainer>
      <>
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
      </>
    </PageContainer>
  );
};

export default React.memo(BitcoinPrice);
