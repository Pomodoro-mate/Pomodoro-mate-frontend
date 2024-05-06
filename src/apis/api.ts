import { ROUTE_PATH } from '@/constant/routes';
import { API_PATH } from '@/constant/api-path';
import { HTTP_ERROR } from '@/constant/error-status-code';
import { ERROR_MESSAGE } from '@/constant/error-message';

import { getLocalStorage, setLocalStorage } from '@/utils/storage';

import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import getAccessToken from './auth/get-access-token';

const TIME_OUT = 5_000;
const baseURL = 'https://www.pomodoro-mate.site/api';

//import.meta.env.VITE_BASE_URL as string;

const generateHeaders = () => {
  const headers: AxiosRequestConfig['headers'] = {
    'Content-Type': 'application/json',
  };
  return headers;
};

export const http: AxiosInstance = axios.create({
  baseURL,
  timeout: TIME_OUT,
  headers: generateHeaders(),
});

http.interceptors.request.use((config) => {
  const { url } = config;
  if (url === API_PATH.REFRESH_TOKEN) {
    config.withCredentials = true;
    return config;
  }

  const accessToken = getLocalStorage('token');
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

http.interceptors.response.use(
  (response) => {
    return response;
  },

  async (error) => {
    const {
      config,
      response: { status },
    } = error;

    if (status === HTTP_ERROR.UNAUTHORIZED) {
      if (error.response.data === ERROR_MESSAGE.UNAUTHORIZED) {
        const response = await getAccessToken();

        if (response.status === 201) {
          const newAccessToken = response.data.accessToken;

          setLocalStorage({ key: 'token', value: newAccessToken });
          axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
          config.headers.Authorization = `Bearer ${newAccessToken}`;
          return axios(config);
        }

        alert(ERROR_MESSAGE.COMMON);
        window.location.replace(ROUTE_PATH.LOGIN);
      }
    }
    return Promise.reject(error);
  },
);
