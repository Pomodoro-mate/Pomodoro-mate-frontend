import { API_PATH } from '@/constant/api-path';
import { http } from '../api';

const refreshToken = async () => {
  const response = await http.post(API_PATH.REFERSH_TOKEN);
  return response;
};
export default refreshToken;
