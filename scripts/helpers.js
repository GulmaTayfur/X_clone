export const setLocal = (key, value) => {
  const strData = JSON.stringify(value);
  localStorage.setItem(key, strData);
};

export const getLocal = (key) => {
  const strData = localStorage.getItem(key);
  return JSON.parse(strData);
};
