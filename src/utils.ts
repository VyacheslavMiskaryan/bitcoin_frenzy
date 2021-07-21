import OperationType from './types';

const getDate = () => {
  const date = new Date();
  let minutes: string | number = date.getMinutes();
  const hour = date.getHours();
  let day: string | number = date.getUTCDate();
  let month: string | number = date.getMonth() + 1;
  const year = date.getFullYear();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }
  if (month < 10) {
    month = `0${month}`;
  }
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
