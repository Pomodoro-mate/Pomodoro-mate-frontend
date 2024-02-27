import Header from './header/header';
import ProtectedRoute from '../common/protected-route/protected-route';

import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <ProtectedRoute>
          <Outlet />
        </ProtectedRoute>
      </main>
    </>
  );
};

export default Layout;
