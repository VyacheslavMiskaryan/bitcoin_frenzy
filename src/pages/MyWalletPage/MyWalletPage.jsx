import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';

import { deposit } from '../../redux/actions';
import { DEFAULT_WITHDRAW } from '../../constants';
import createOperationsHistory from '../../utils/createOperationsHistory';

import GlobalStyles from '../../globalStyles';

const MyWalletPage = ({ operationsHistory, setOperationsHistory }) => {
  const classes = GlobalStyles();
  const dispatch = useDispatch();
  const { dollars, bitcoins } = useSelector((state) => state.wallet);

  const handleChangeDollarsScore = useCallback((isWithdraw) => {
    if (isWithdraw ? dollars >= DEFAULT_WITHDRAW : true) {
      const data = { score: isWithdraw ? dollars - DEFAULT_WITHDRAW : dollars + DEFAULT_WITHDRAW };
      const title = `100$ ${isWithdraw ? 'Withdraw' : 'Deposit'}`;
      dispatch(deposit(data));
      createOperationsHistory(title, operationsHistory, setOperationsHistory);
    }
  }, [dispatch, dollars, operationsHistory, setOperationsHistory]);

  return (
    <div className="page-container">
      <div className="title">
        <h2>Your Bitcoin wallet</h2>
      </div>
      <div className="score">
        <h2>
          You now own&ensp;
          {bitcoins}
          &ensp;Bitcoins
        </h2>
      </div>
      <div className="page-manager">
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => handleChangeDollarsScore(false)}
        >
          Deposit 100&#36;
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => handleChangeDollarsScore(true)}
          disabled={dollars < DEFAULT_WITHDRAW}
        >
          Withdraw 100&#36;
        </Button>
      </div>
      <div className="error-field">
        {(dollars < DEFAULT_WITHDRAW) && <span>You cannot withdraw less than 100&#36;</span>}
      </div>
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
