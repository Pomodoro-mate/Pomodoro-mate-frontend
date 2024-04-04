import { Outlet, useLocation } from 'react-router-dom';
import { ROUTE_PATH } from '@/constant/routes';
import ProtectedRoute from '../common/protected-route/protected-route';
import Header from './header/header';

const Layout = () => {
  const { pathname } = useLocation();

  // 현재 경로가 스터디룸 내부인지 확인하는 정규식
  const regExp = new RegExp(`^${ROUTE_PATH.STUDY_ROOMS}/\\d+$`);
  const isStudyRoomPage = regExp.test(pathname);

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
