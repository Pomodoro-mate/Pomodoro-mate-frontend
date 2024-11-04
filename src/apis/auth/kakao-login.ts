import { API_PATH } from '@/constant/api-path';
import { http } from '../api';

type KakaoLoginResponse = {
  accessToken: string;
};

type Params = {
  code: string;
};

export const kakaoLogin = async ({ code }: Params): Promise<KakaoLoginResponse> => {
  const { data } = await http.get(`${API_PATH.KAKAO_LOGIN}?code=${code}`);

  return data;
};
