import { Outlet, useLocation } from 'react-router-dom';

import { ROUTE_PATH } from '@/constant/routes';

import { Container } from '../ui';
import Header from './header/header';
import ProtectedRoute from '../common/protected-route/protected-route';

const Layout = () => {
  const { pathname } = useLocation();

  const IN_STUDY_ROOM_REGEX = new RegExp(`^${ROUTE_PATH.STUDY_ROOMS}/\\d+$`);
  const isStudyRoomPage = IN_STUDY_ROOM_REGEX.test(pathname);

  return (
    <>
      {!isStudyRoomPage && <Header />}
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
