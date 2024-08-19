import { API_PATH } from '@/constant/api-path';
import { http } from '../api';

type LoginResponse = {
  accessToken: string;
};

type Params = {
  nickname: string;
};

export const login = async ({ nickname }: Params): Promise<LoginResponse> => {
  const response = await http.post<LoginResponse>(
    API_PATH.GUEST_LOGIN,
    { nickname },
    { withCredentials: true },
  );
  return response.data;
};
