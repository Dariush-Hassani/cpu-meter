export const getLocalStorage = (key: string): string => {
  let rv = localStorage.getItem(key);
  return rv ?? "";
};
export const setLocalStorage = (
  key: string,
  value: string | number | boolean
): void => {
  localStorage.setItem(key, value.toString());
};
