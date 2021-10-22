import { getToken, getTypeUser } from '~/utils';
import { isEmpty } from 'lodash';

export const isAuthenticated = () => {
  return !isEmpty(getToken());
};

export const isAdm = () => {
  return !isEmpty(getToken()) && getTypeUser() == 'ADMIN';
};
