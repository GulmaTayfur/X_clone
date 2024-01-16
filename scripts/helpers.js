// locale veri kaydeder
export const setLocal = (key, value) => {
  // string'e çevir
  const strData = JSON.stringify(value);

  // locale kaydet
  localStorage.setItem(key, strData);
};

// lokalden veri çeker
export const getLocal = (key) => {
  // local'den veriye eriş
  const strData = localStorage.getItem(key);

  //  stringi js verisine çevir ve döndür
  return JSON.parse(strData);
};
