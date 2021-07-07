import { createAction } from 'redux-actions';

export const initState = createAction('INIT_STATE');
export const deposit = createAction('DEPOSIT');
export const buyBitcoin = createAction('BUY_BITCOIN');
export const changeBitcoinPrice = createAction('CHANGE_BITCOIN_PRICE');
