export const setLocalStorageItem = (key: string, value: string | any) => {
  if (typeof value !== "string") value = JSON.stringify(value);
  localStorage.setItem(key, value);
};
