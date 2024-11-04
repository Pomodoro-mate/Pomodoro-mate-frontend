import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { ROUTE_PATH } from '@/constant/routes';

import useKakaoLoginMutation from '../hooks/useKakaoLoginMutation';
import { tokenStorage } from '@/utils/storage';

const KakaoAuth = () => {
  const [searchParams] = useSearchParams(document.URL);
  const code = searchParams.get('code');

  const navigate = useNavigate();

  const goToHome = () => navigate(ROUTE_PATH.HOME);

  const loginAction = (accessToken: string) => {
    tokenStorage.setItem(accessToken);
    goToHome();
  };

  const { mutate: kakaoLoginMutate } = useKakaoLoginMutation({ loginAction });

  useEffect(() => {
    if (!code) return;

    kakaoLoginMutate({ code });
  }, []);

  return <h3>잠시만 기다려주세요....</h3>;
};

export default KakaoAuth;
