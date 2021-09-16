/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { toast } from 'react-toastify';

export const getToken = (): string | null => {
  return localStorage.getItem('@g2k:token');
};

export const setToken = (value: string): void => {
  return localStorage.setItem('@g2k:token', value);
};

export const setUserData = (user: string): void => {
  return localStorage.setItem('@g2k:user', JSON.stringify(user));
};

export const getUserData = () => {
  return JSON.parse(localStorage.getItem('@g2k:user')!);
};

export const notify = (type: 'success' | 'error', msg: string) => {
  if (type === 'error') {
    const notifyError = () =>
      toast.error(msg, {
        toastId: 'no-repeat-error',
      });

    return notifyError();
  }
  const notifySuccess = () =>
    toast.success(msg, {
      toastId: 'no-repeat-success',
    });

  return notifySuccess();
};
