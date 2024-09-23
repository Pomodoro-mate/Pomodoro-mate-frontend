import { API_PATH } from '@/constant/api-path';
import { http } from '../api';

type KakaoLoginResponse = {
  accessToken: string;
};

type KakaoLoginParamsProps = {
  code: string | null;
};

export const kakaoLogin = async ({ code }: KakaoLoginParamsProps): Promise<KakaoLoginResponse> => {
  const { data } = await http.get(`${API_PATH.KAKAO_LOGIN}?code=${code}`);

  return data;
};
