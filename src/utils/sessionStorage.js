const getDefaultValue = (key, defaultValue) => {
  const value = sessionStorage.getItem(key);
  return value ? Number(value) : defaultValue;
};

export default getDefaultValue;
