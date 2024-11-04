import kakao from '../../../assets/kakaoLogin.png';

const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;

const REDIRECT_URI = 'http://localhost:8080/auth/kakao/callback';

const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const KakaoLogin = () => {
  const oAuthLogin = () => {
    window.location.href = KAKAO_URL;
  };

  return <img src={kakao} className="cursor-pointer" onClick={oAuthLogin} alt="카카오 로그인" />;
};

export default KakaoLogin;
