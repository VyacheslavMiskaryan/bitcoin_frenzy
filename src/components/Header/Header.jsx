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
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.headerContainer}>
          <div className={classes.logoContainer}>
            <img src={bitcoin} alt="logo" />
            <span>&nbsp;BITCOIN FRENZY</span>
          </div>
          <div className={classes.bitcoinCourse}>
            1
            {' '}
            BITCOIN
            {' '}
            =
            {' '}
            {bitcoinRate}
            {' '}
            $
          </div>
          <div className={classes.walletInformation}>
            <span className={classes.walletDollars}>
              {dollars}
              {' '}
              $
            </span>
            <span>
              {bitcoins}
              {' '}
              BITCOINS
            </span>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
