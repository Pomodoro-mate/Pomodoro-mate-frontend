import { API_PATH } from '@/constant/api-path';
import { http } from '../api';

export const logout = async () => {
  return await http.delete(API_PATH.LOGOUT);
};
