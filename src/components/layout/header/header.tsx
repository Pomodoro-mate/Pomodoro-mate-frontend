import { useLocation } from 'react-router-dom';

import { Container } from '@/components/ui';
import SwitchController from './switch-controller';

import logo from '../../../assets/logo.png';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className="border-b">
      <Container className="my-0 px-40">
        <header className=" h-[4.375rem] w-full flex justify-between shrink-0 items-center">
          <img src={logo} />
          <SwitchController pathname={pathname} />
        </header>
      </Container>
    </div>
  );
};

export default Header;
