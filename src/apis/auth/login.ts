import { http } from '../api';

type LoginResponse = {
  accessToken: string;
};

type Params = {
  nickname: string;
};

export const login = async ({ nickname }: Params): Promise<LoginResponse> => {
  const response = await http.post<LoginResponse>(
    '/auth/guest',
    { nickname },
    { withCredentials: true },
  );
  return response.data;
};
