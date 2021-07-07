import React, { useState } from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';

import Header from './components/Header';
import SideMenu from './components/SideMenu';
import OperationsHistorySideBar from './components/OperationsHistorySideBar';
import MyWalletPage from './pages/MyWalletPage';
import OperationsWithMyBitcoins from './pages/OperationsWithMyBitcoins';
import BitcoinRateChangePage from './pages/BitcoinRateChangePage';
import './global.sass';

const App = () => {
  const [operationsHistory, setOperationsHistory] = useState([]);

  return (
    <div className="App">
      <Header />
      <div className="content-field">
        <BrowserRouter>
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
        <OperationsHistorySideBar operationsHistory={operationsHistory} />
      </div>
    </div>
  );
};

export default App;
