// src/api/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://finlorax-tax-backend.onrender.com/api',
  timeout: 120000,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('finlorax_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem('finlorax_token');
      window.location.href = '/admin/login';
    }
    return Promise.reject(err);
  }
);

export default api;