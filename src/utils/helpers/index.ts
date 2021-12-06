/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { isEmpty } from 'lodash';
import { toast } from 'react-toastify';

export const getToken = (): string | null => {
  return localStorage.getItem('@g2k:token');
};

export const getTypeUser = (): string | null => {
  return localStorage.getItem('@g2k:typeuser');
};

export const getCurrentCourseID = (): string | null => {
  return localStorage.getItem('@g2k:currentCourseID');
};

export const setToken = (value: string): void => {
  return localStorage.setItem('@g2k:token', value);
};

export const setUserData = (user: string): void => {
  return localStorage.setItem('@g2k:user', user);
};

export const setOtherUserData = (user: string): void => {
  return localStorage.setItem('@g2k:otherUser', user);
};

export const setTypeUser = (value: string): void => {
  return localStorage.setItem('@g2k:typeuser', value);
};

export const setCurrentCourseID = (value: string): void => {
  return localStorage.setItem('@g2k:currentCourseID', value);
};

export const getUserData = () => {
  return JSON.parse(localStorage.getItem('@g2k:user')!);
};

export const getOtherUserData = () => {
  return JSON.parse(localStorage.getItem('@g2k:otherUser')!);
};

export const checkOtherUserData = () => {
  if (!isEmpty(localStorage.getItem('@g2k:otherUser'))) {
    return localStorage.removeItem('@g2k:otherUser');
  }

  return;
};

export const notify = (type: 'success' | 'error' | 'info', msg: string) => {
  if (type === 'error') {
    const notifyError = () =>
      toast.error(msg, {
        toastId: 'no-repeat-error',
      });

    return notifyError();
  }
  if (type === 'info') {
    const notifyInfo = () =>
      toast.info(msg, {
        toastId: 'no-repeat-info',
      });

    return notifyInfo();
  }
  const notifySuccess = () =>
    toast.success(msg, {
      toastId: 'no-repeat-success',
    });

  return notifySuccess();
};

export const logout = () => {
  localStorage.clear();
  window.location.reload();
};

export const textLimiter = (text: string): string => {
  if (text.length >= 120) {
    return `${text.substr(0, 120)}...`;
  }

  return text;
};
