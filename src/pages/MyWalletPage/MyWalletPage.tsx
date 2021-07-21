import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  ErrorField,
  MainButton,
  PageContainer,
  PageTitle,
  SubTitle,
} from '../../components';

import OperationType from '../../types';
import { RootState } from '../../redux/store/store';
import { changeTheAmountOfDollars } from '../../redux/actions';
import { DEFAULT_WITHDRAW } from '../../constants';
import createHistoryItem from '../../utils';

import './styles.sass';

type DataType = {
  dollars: number,
  operationsHistory: OperationType[],
}

const MyWalletPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const { dollars, bitcoins, operationsHistory } = useSelector((state: RootState) => state.wallet);

  const handleChangeDollarsScore = useCallback((isWithdraw) => {
    const isCheckActive = isWithdraw ? dollars >= DEFAULT_WITHDRAW : true;
    if (isCheckActive) {
      const title = `100$ ${isWithdraw ? 'Withdraw' : 'Deposit'}`;
      const data: DataType = {
        dollars: isWithdraw ? dollars - DEFAULT_WITHDRAW : dollars + DEFAULT_WITHDRAW,
        operationsHistory: createHistoryItem(title, operationsHistory),
      };
      dispatch(changeTheAmountOfDollars(data));
    }
  }, [dispatch, dollars, operationsHistory]);

  return (
    <PageContainer>
      <>
        <PageTitle title="Your Bitcoin wallet" />
        <SubTitle subTitleMessage={`You now own ${bitcoins} Bitcoins`} />
        <div className="page-manager">
          <MainButton
            handler={handleChangeDollarsScore}
            title="Deposit 100$"
          />
          <MainButton
            handler={handleChangeDollarsScore}
            handlerArgument
            isDisable={dollars < DEFAULT_WITHDRAW}
            title="Withdraw 100$"
          />
        </div>
        <ErrorField
          value={dollars}
          threshold={DEFAULT_WITHDRAW}
          errorMessage="You can't withdraw less than 100&#36;"
        />
      </>
    </PageContainer>
  );
};

export default MyWalletPage;
