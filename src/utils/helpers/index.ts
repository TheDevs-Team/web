export const getToken = (): string | null => {
  return localStorage.getItem('@g2k:token');
};

export const setToken = (value: string): void => {
  return localStorage.setItem('@g2k:token', value);
};
