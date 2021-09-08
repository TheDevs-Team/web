import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.15.0.31:3333',
  headers: {
    'Content-type': 'application/json',
  },
});

export default api;
