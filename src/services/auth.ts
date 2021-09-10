import { getToken } from '~/utils';

export const isAuthenticated = () => {
  return !!getToken();
};
