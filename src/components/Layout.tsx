import React from 'react';
import Header from './Header';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <Container>
      <Header pathname={pathname} />
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

const Container = styled.div`
  width: 1080px;
  min-height: 100vh;
  margin: 0 auto;
`;
export default Layout;
