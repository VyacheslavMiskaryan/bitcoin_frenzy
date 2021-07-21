import OperationType from '../../types';
import { DEFAULT_BITCOIN_PRICE } from '../../constants';

type InitialStateType = {
  dollars: number,
  bitcoins: number,
  bitcoinRate: number,
  operationsHistory: OperationType[],
}

type ActionsType = {
  type: string,
  payload: InitialStateType,
}

const initialState: InitialStateType = {
  dollars: Number(sessionStorage.getItem('dollars') ?? 200),
  bitcoins: Number(sessionStorage.getItem('bitcoins') ?? 1),
  bitcoinRate: Number(sessionStorage.getItem('bitcoinRate') ?? DEFAULT_BITCOIN_PRICE),
  operationsHistory: JSON.parse(sessionStorage.getItem('operationsHistory') as string) ?? [],
};

const getPageDataReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'CHANGE_THE_AMOUNT_OF_DOLLARS':
      sessionStorage.setItem('dollars', String(action.payload.dollars));
      sessionStorage.setItem('operationsHistory', JSON.stringify(action.payload.operationsHistory));
      return {
        ...state,
        dollars: action.payload.dollars,
        operationsHistory: action.payload.operationsHistory,
      };
    case 'CHANGE_THE_AMOUNT_OF_BITCOINS':
      sessionStorage.setItem('dollars', String(action.payload.dollars));
      sessionStorage.setItem('bitcoins', String(action.payload.bitcoins));
      sessionStorage.setItem('operationsHistory', JSON.stringify(action.payload.operationsHistory));
      return {
        ...state,
        bitcoins: action.payload.bitcoins,
        dollars: action.payload.dollars,
        operationsHistory: action.payload?.operationsHistory,
      };
    case 'CHANGE_BITCOIN_PRICE':
      sessionStorage.setItem('bitcoinRate', String(action.payload.bitcoinRate));
      sessionStorage.setItem('operationsHistory', JSON.stringify(action.payload.operationsHistory));
      return {
        ...state,
        bitcoinRate: action.payload.bitcoinRate,
        operationsHistory: action.payload?.operationsHistory,
      };
    default:
      return state;
  }
};

export default getPageDataReducer;
