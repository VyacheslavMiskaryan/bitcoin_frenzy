import { DEFAULT_BITCOIN_PRICE } from '../../constants';
import getDefaultValue from './utils';

const initialState = {
  dollars: getDefaultValue('dollars', 200),
  bitcoins: getDefaultValue('bitcoins', 1),
  bitcoinRate: getDefaultValue('bitcoinRate', DEFAULT_BITCOIN_PRICE),
  operationsHistory: getDefaultValue('operationsHistory', []),
};

const getPageDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_THE_AMOUNT_OF_DOLLARS':
      sessionStorage.setItem('dollars', action.payload.score);
      sessionStorage.setItem('operationsHistory', JSON.stringify(action.payload.history));
      return {
        ...state,
        dollars: action.payload.score,
        operationsHistory: action.payload.history,
      };
    case 'CHANGE_THE_AMOUNT_OF_BITCOINS':
      sessionStorage.setItem('dollars', action.payload.dollars);
      sessionStorage.setItem('bitcoins', action.payload.bitcoins);
      sessionStorage.setItem('operationsHistory', JSON.stringify(action.payload.history));
      return {
        ...state,
        bitcoins: action.payload.bitcoins,
        dollars: action.payload.dollars,
        operationsHistory: action.payload.history,
      };
    case 'CHANGE_BITCOIN_PRICE':
      sessionStorage.setItem('bitcoinRate', action.payload.rate);
      sessionStorage.setItem('operationsHistory', JSON.stringify(action.payload.history));
      return {
        ...state,
        bitcoinRate: action.payload.rate,
        operationsHistory: action.payload.history,
      };
    default:
      return state;
  }
};

export default getPageDataReducer;
