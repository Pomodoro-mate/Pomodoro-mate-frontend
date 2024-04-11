import { Outlet, useLocation } from 'react-router-dom';
import { ROUTE_PATH } from '@/constant/routes';
import ProtectedRoute from '../common/protected-route/protected-route';
import Header from './header/header';

const Layout = () => {
  const { pathname } = useLocation();

  const IN_STUDY_ROOM_REGEX = new RegExp(`^${ROUTE_PATH.STUDY_ROOMS}/\\d+$`);
  const isStudyRoomPage = IN_STUDY_ROOM_REGEX.test(pathname);

  return (
    <>
      {!isStudyRoomPage && <Header />}
      <main>
        <ProtectedRoute>
          <Outlet />
        </ProtectedRoute>
      </main>
    </>
  );
};

export default Layout;
