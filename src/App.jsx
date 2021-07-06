import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import SideMenu from './components/SideMenu';
import MyWalletPage from './pages/MyWalletPage';
import OperationsWithMyBitcoins from './pages/OperationsWithMyBitcoins';
import BitcoinRateChangePage from './pages/BitcoinRateChangePage';
import './global.sass';
import getDate from './utils/getDate';

const App = () => {
  const [operationsHistory, setOperationsHistory] = useState([]);

  if (!sessionStorage.getItem('dollars')) {
    sessionStorage.setItem('dollars', '200');
    sessionStorage.setItem('bitcoins', '1');
    sessionStorage.setItem('bitcoinRate', '1000');
  }
  console.log(getDate());
  return (
    <div className="App">
      <Header />
      <div className="content-field">
        <BrowserRouter>
          <SideMenu />
          <Route exact path="/wallet">
            <MyWalletPage
              operationsHistory={operationsHistory}
              setOperationsHistory={setOperationsHistory}
            />
          </Route>
          <Route exact path="/buy">
            <OperationsWithMyBitcoins
              isBuyPage
              operationsHistory={operationsHistory}
              setOperationsHistory={setOperationsHistory}
            />
          </Route>
          <Route exact path="/sell">
            <OperationsWithMyBitcoins
              isBuyPage={false}
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
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
