import { Outlet } from 'react-router-dom';

import ProtectedRoute from '../common/protected-route/protected-route';
import { Container } from '../ui';
import Header from './header/header';
import ExitRoomModalProvdier from '@/pages/study-room/provider/exit-room-modal-provider';

const Layout = () => {
  return (
    <>
      <ExitRoomModalProvdier>
        <Header />
      </ExitRoomModalProvdier>
      <main>
        <ProtectedRoute>
          <Container className="my-8 px-40">
            <Outlet />
          </Container>
        </ProtectedRoute>
      </main>
    </>
  );
};

export default Layout;
