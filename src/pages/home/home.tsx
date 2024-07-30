import landingImg from '@/assets/landing.png';
import Header from '@/components/layout/header/header';
import { Container, Title } from '@/components/ui';
import LoginDialog from '../login/login-dialog';

const Home = () => {
  return (
    <>
      <Header />
      <Container className="flex flex-row flex-wrap items-center justify-between px-40">
        <div>
          <Title>
            <p className="sm:mb-2 font-bold sm:text-3xl">나의</p>
            <p className="sm:mb-2 font-bold sm:text-3xl">뽀모도로 메이트를 만나</p>
            <p className="sm:mb-5 font-bold sm:text-3xl">같이 스터디 할까말까?</p>
          </Title>
          <LoginDialog btnName="스터디 하러가기" />
        </div>
        <img src={landingImg} alt="landing" width={550} height={550} />
      </Container>
    </>
  );
};

export default Home;
