import getDate from './getDate';

const createOperationsHistory = (title, operationsHistory, setOperationsHistory) => {
  const newOperation = {
    id: operationsHistory.length,
    title,
    date: getDate(),
  };
  setOperationsHistory([newOperation, ...operationsHistory]);
};

export default createOperationsHistory;
