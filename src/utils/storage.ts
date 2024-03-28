type SetLocalStorage = Record<'key' | 'value', string>;

export const setLocalStorage = ({ key, value }: SetLocalStorage) => {
  localStorage.setItem(key, value);
};

export const getLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

export const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
