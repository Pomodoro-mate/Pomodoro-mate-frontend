import { getLocalStorge } from '@/utils/util';
import axios, { AxiosInstance } from 'axios';

const TIME_OUT = 10000;
const baseURL = import.meta.env.VITE_BASE_URL as string;

// interface ApiResponse<T> {
//   data: T;
// }
const generateHeaders = () => {
  const headers: Record<string, string> = {
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

// export const http = async <T>(endpoint: string, method: string, data?: any) => {
//   const url = `${baseURL}/${endpoint}`;

//   const config: AxiosRequestConfig = {
//     url,
//     method,
//     data,
//   };
//   try {
//     const response: AxiosResponse<ApiResponse<T>> = await axios(config);
//     return response.data;
//   } catch (error) {
//     throw new Error(`${error}`);
//   }
// };
