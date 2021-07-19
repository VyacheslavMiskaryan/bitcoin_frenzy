const getDefaultValue = (key, defaultValue) => {
  const value = JSON.parse(sessionStorage.getItem(key));
  if ((typeof (value)) === 'object') {
    return value || defaultValue;
  }
  return value ? Number(value) : defaultValue;
};

export default getDefaultValue;
