import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useKakaoLoginMutation from '../hooks/useKakaoLoginMutation';
import { ROUTE_PATH } from '@/constant/routes';

const KakaoAuth = () => {
  const params = new URL(document.URL).searchParams;
  const code = params.get('code');

  const navigate = useNavigate();

  const handlePage = () => navigate(ROUTE_PATH.HOME);

  const { mutate: kakaoLoginMutate } = useKakaoLoginMutation({ handlePage });

  useEffect(() => {
    kakaoLoginMutate({ code });
  }, []);

  return <h3>잠시만 기다려주세요....</h3>;
};

export default KakaoAuth;
