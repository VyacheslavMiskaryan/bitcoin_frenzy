import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';

import Header from './components/Header';
import SideMenu from './components/SideMenu';
import OperationsHistorySideBar from './components/OperationsHistorySideBar';

import {
  MyWalletPage,
  BuyBitcoinPage,
  SellBitcoin,
  BitcoinPrice,
} from './pages';

import './global.sass';

const App = (): JSX.Element => (
  <div className="App">
    <BrowserRouter>
      <Header />
      <div className="content-field">
        <SideMenu />
        <Route exact path="/">
          <Redirect to="/wallet" />
        </Route>
        <Route exact path="/wallet" component={MyWalletPage} />
        <Route exact path="/buy" component={BuyBitcoinPage} />
        <Route exact path="/sell" component={SellBitcoin} />
        <Route exact path="/bitcoin" component={BitcoinPrice} />
        <OperationsHistorySideBar />
      </div>
    </BrowserRouter>
  </div>
);

export default App;
