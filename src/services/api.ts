import axios from 'axios';
import { getToken } from '~/utils';

const api = axios.create({
  baseURL: 'http://172.15.0.31:3333',
});

api.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers.authorization = token;
  }
  return config;
});

export default api;
