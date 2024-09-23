const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;

const REDIRECT_BASE_URI = import.meta.env.VITE_KAKAO_REST_API_KEY;

const REDIRECT_URI = `http://localhost:8080/auth/kakao/callback`;

const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const KakaoLogin = () => {
  // oauth 요청 URL

  const handleLogin = () => {
    window.location.href = KAKAO_URL;
  };

  return <button onClick={handleLogin}>카카오톡 로그인</button>;
};

export default KakaoLogin;
