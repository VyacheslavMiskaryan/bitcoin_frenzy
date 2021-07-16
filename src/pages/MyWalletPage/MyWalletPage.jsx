import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import PageTitle from '../../components/PageTitle';
import SubTitle from '../../components/SubTitle';
import MainButton from '../../components/MainButton';
import ErrorField from '../../components/ErrorField';

import { deposit } from '../../redux/actions';
import { DEFAULT_WITHDRAW } from '../../constants';
import createOperationsHistory from '../../utils/createOperationsHistory';

import './MyWallet.sass';

const MyWalletPage = ({ operationsHistory, setOperationsHistory }) => {
  const dispatch = useDispatch();
  const { dollars, bitcoins } = useSelector((state) => state.wallet);

  const handleChangeDollarsScore = useCallback((isWithdraw) => {
    const isCheckActive = isWithdraw ? dollars >= DEFAULT_WITHDRAW : true;
    if (isCheckActive) {
      const data = { score: isWithdraw ? dollars - DEFAULT_WITHDRAW : dollars + DEFAULT_WITHDRAW };
      const title = `100$ ${isWithdraw ? 'Withdraw' : 'Deposit'}`;
      dispatch(deposit(data));
      createOperationsHistory(title, operationsHistory, setOperationsHistory);
    }
  }, [dispatch, dollars, operationsHistory, setOperationsHistory]);

  return (
    <div className="page-container">
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
    </div>
  );
};

MyWalletPage.propTypes = {
  operationsHistory: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  setOperationsHistory: PropTypes.func.isRequired,
};

export default React.memo(MyWalletPage);
