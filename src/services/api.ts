import axios from 'axios';
import { getToken } from '~/utils';

const api = axios.create({
  baseURL: 'https://g2k-api.herokuapp.com',
});

api.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers.authorization = token;
  }
  return config;
});

export default api;
