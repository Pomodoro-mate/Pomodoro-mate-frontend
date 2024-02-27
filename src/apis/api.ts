import { getLocalStorge } from '@/utils/storage';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const TIME_OUT = 5_000;
const baseURL = import.meta.env.VITE_BASE_URL as string;

const generateHeaders = () => {
  const headers: AxiosRequestConfig['headers'] = {
    'Content-Type': 'application/json',
  };

  const authToken = getLocalStorge('token');
  if (authToken) {
    headers['Authorization'] = `Bearer ${authToken}`;
  }
  return headers;
};

export const http: AxiosInstance = axios.create({
  baseURL,
  timeout: TIME_OUT,
  headers: generateHeaders(),
});
