import { toast } from 'react-toastify';

export const getToken = (): string | null => {
  return localStorage.getItem('@g2k:token');
};

export const setToken = (value: string): void => {
  return localStorage.setItem('@g2k:token', value);
};

export const setUserData = ({ id, name, document, email, phone, type, financial_status, active }: UserType): void => {
  const userData = JSON.stringify({
    id,
    name,
    document,
    email,
    phone,
    type,
    financial_status,
    active,
  });

  return localStorage.setItem('@g2k:user', userData);
};

export const notify = (type: 'success' | 'error', msg: string) => {
  if (type === 'error') {
    const notifyError = () =>
      toast.error(msg, {
        toastId: 'no-repeat',
      });

    return notifyError();
  }
  const notifySuccess = () =>
    toast.success(msg, {
      toastId: 'no-repeat',
    });

  return notifySuccess();
};
