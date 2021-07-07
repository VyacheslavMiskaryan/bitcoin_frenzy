const getDate = () => {
  const date = new Date();
  let minutes = date.getMinutes();
  const hour = date.getHours();
  let day = date.getUTCDate();
  let month = date.getMonth() + 1;
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

const createOperationsHistory = (title, operationsHistory, setOperationsHistory) => {
  const newOperation = {
    id: operationsHistory.length,
    title,
    date: getDate(),
  };
  setOperationsHistory([newOperation, ...operationsHistory]);
};

export default createOperationsHistory;
