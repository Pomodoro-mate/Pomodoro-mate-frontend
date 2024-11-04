import { API_PATH } from '@/constant/api-path';
import { http } from '../api';

const getAccessToken = async () => {
  const response = await http.post(API_PATH.REFRESH_TOKEN);

  return response;
};
export default getAccessToken;
