import OperationType from './types';

const getDate = () => {
  const date = new Date();
  const minutes = `${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`;
  const hour = date.getHours();
  const day = `${date.getUTCDate() < 10 ? '0' : ''}${date.getUTCDate()}`;
  const month = `${date.getMonth() < 10 ? '0' : ''}${date.getMonth()}`;
  const year = date.getFullYear();

  return `${day}/${month}/${year} ${hour}:${minutes}`;
};

const createHistoryItem = (title: string, operationsHistory: OperationType[]): OperationType[] => {
  const newOperation = {
    id: operationsHistory.length,
    title,
    date: getDate(),
  };

  return [newOperation, ...operationsHistory];
};

export default createHistoryItem;
