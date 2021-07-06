import { createAction } from 'redux-actions';

export const deposit = createAction('DEPOSIT');
export const withdraw = createAction('WITHDRAW');
export const buyBitcoin = createAction('BUY_BITCOIN');
export const changeBitcoinPrice = createAction('CHANGE_BITCOIN_PRICE');
