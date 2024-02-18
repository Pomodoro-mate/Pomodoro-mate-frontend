export const setLocalStorge = ({ key, value }: { key: string; value: string }) => {
  localStorage.setItem(key, value);
};
export const getLocalStorge = (key: string) => {
  return localStorage.getItem(key);
};
