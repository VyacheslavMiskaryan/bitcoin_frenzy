/* eslint-disable no-restricted-syntax */
const getDate = () => {
  const date = new Date();
  const actionDate = {};
  actionDate.minutes = date.getMinutes();
  actionDate.hour = date.getHours();
  actionDate.day = date.getUTCDate();
  actionDate.month = date.getMonth() + 1;
  actionDate.year = date.getFullYear();

  Object.keys(actionDate).forEach((item) => {
    let value = item;
    if (value < 10) {
      value = `0${item}`;
    }
  });
  return `${actionDate.hour}/${actionDate.month}/${actionDate.year} ${actionDate.hour}:${actionDate.minutes}`;
};

export default getDate;
