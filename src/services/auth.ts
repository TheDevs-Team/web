import { getToken } from '~/utils';
import { isEmpty } from 'lodash';

export const isAuthenticated = () => {
  return !isEmpty(getToken());
};
