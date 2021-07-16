import React, { useState } from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';

import Header from './components/Header';
import SideMenu from './components/SideMenu';
import OperationsHistorySideBar from './components/OperationsHistorySideBar';

import MyWalletPage from './pages/MyWalletPage';
import BuyBitcoinPage from './pages/BuyBitcoinPage';
import SellBitcoin from './pages/SellBitcoin';
import BitcoinRateChangePage from './pages/BitcoinPrice';

import './global.sass';

const App = () => {
  const [operationsHistory, setOperationsHistory] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content-field">
          <SideMenu />
          <Route exact path="/">
            <Redirect to="/wallet" />
          </Route>
          <Route exact path="/wallet">
            <MyWalletPage
              operationsHistory={operationsHistory}
              setOperationsHistory={setOperationsHistory}
            />
          </Route>
          <Route exact path="/buy">
            <BuyBitcoinPage
              operationsHistory={operationsHistory}
              setOperationsHistory={setOperationsHistory}
            />
          </Route>
          <Route exact path="/sell">
            <SellBitcoin
              operationsHistory={operationsHistory}
              setOperationsHistory={setOperationsHistory}
            />
          </Route>
          <Route exact path="/bitcoin">
            <BitcoinRateChangePage
              operationsHistory={operationsHistory}
              setOperationsHistory={setOperationsHistory}
            />
          </Route>
          <OperationsHistorySideBar operationsHistory={operationsHistory} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
