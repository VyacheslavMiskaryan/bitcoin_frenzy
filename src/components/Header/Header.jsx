import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  AppBar, Toolbar,
} from '@material-ui/core';

import bitcoin from '../../assets/images/bitcoin.svg';
import Styles from './styles';
import './styles.sass';

const Header = () => {
  const classes = Styles();
  const { dollars, bitcoins, bitcoinRate } = useSelector((state) => state.wallet);

  return (
    <AppBar position="static">
      <Toolbar className={classes.headerContainer}>
        <Link
          to="/wallet"
          className="link-area"
        >
          <img src={bitcoin} alt="logo" />
          <span>&nbsp;BITCOIN FRENZY</span>
        </Link>
        <div className="bitcoin-rate">
          1&ensp;BITCOIN&ensp;=&ensp;
          {bitcoinRate}
          &ensp;&#36;
        </div>
        <div className="wallet-information">
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
