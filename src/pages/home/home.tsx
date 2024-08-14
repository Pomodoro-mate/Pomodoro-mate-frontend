import landingImg from '@/assets/landing.png';
import Header from '@/components/layout/header/header';
import { Container } from '@/components/ui';
import LoginDialog from '../login/login-dialog';

const Home = () => {
  return (
    <>
      <Header />
      <Container className="flex flex-row flex-wrap items-center justify-between px-40">
        <div>
          <h1 className="mb-2">나의</h1>
          <h1 className="mb-2">뽀모도로 메이트를 만나</h1>
          <h1 className="mb-5">같이 스터디 할까말까?</h1>
          <LoginDialog btnName="스터디 하러가기" />
        </div>
        <img src={landingImg} alt="landing" width={550} height={550} />
      </Container>
    </>
  );
};

export default Home;
