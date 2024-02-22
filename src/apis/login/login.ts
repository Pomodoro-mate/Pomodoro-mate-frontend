import { http } from '../api';

type LoginResponse = {
  accessToken: string;
};
type LoginData = {
  nickname: string;
};

export const login = async ({ nickname }: LoginData): Promise<LoginResponse> => {
  const response = await http.post<LoginResponse>('/auth/guest', { nickname });
  return response.data;
  // const { accessToken } = await http<LoginResponse>('auth/guest', 'post', { nickname });
  // const { accessToken } = response;
  // return accessToken;
};
