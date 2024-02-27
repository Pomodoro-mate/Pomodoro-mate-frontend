export const setLocalStorage = ({ key, value }: { key: string; value: string }) => {
  localStorage.setItem(key, value);
};

export const getLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};
