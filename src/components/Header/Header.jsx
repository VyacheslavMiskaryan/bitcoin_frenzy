import React from 'react';
import { useSelector } from 'react-redux';

import {
  AppBar, Toolbar,
} from '@material-ui/core';

import bitcoin from '../../assets/images/bitcoin.svg';
import HeaderStyles from './HeaderStyles';

const Header = () => {
  const classes = HeaderStyles();
  const { dollars, bitcoins, bitcoinRate } = useSelector((state) => state.wallet);

  return (
    <AppBar position="static">
      <Toolbar className={classes.headerContainer}>
        <div className={classes.logoContainer}>
          <img src={bitcoin} alt="logo" />
          <span>&nbsp;BITCOIN FRENZY</span>
        </div>
        <div className={classes.bitcoinRate}>
          1&ensp;BITCOIN&ensp;=&ensp;
          {bitcoinRate}
          &ensp;&#36;
        </div>
        <div className={classes.walletInformation}>
          <span>
            {dollars}
            &ensp;&#36;
          </span>
          <span>
            {bitcoins}
            &ensp;BITCOINS
          </span>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
