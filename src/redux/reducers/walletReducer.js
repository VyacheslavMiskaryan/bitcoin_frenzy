const initialState = {
  dollars: Number(sessionStorage.getItem('dollars')),
  bitcoins: Number(sessionStorage.getItem('bitcoins')),
  bitcoinRate: Number(sessionStorage.getItem('bitcoinRate')),
};

const getPageDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DEPOSIT':
      sessionStorage.setItem('dollars', action.payload.deposit);
      return {
        ...state,
        dollars: action.payload.deposit,
      };
    case 'BUY_BITCOIN':
      sessionStorage.setItem('dollars', action.payload.dollars);
      sessionStorage.setItem('bitcoins', action.payload.bitcoins);
      return {
        ...state,
        bitcoins: action.payload.bitcoins,
        dollars: action.payload.dollars,
      };
    case 'CHANGE_BITCOIN_PRICE':
      sessionStorage.setItem('bitcoinRate', action.payload.rate);
      return {
        ...state,
        bitcoinRate: action.payload.rate,
      };
    default:
      return state;
  }
};

export default getPageDataReducer;
