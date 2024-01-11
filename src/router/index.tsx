import Layout from '@/components/Layout';
import ErrorPage from '@/pages/ErrorPage';
import IntroPage from '@/pages/IntroPage';
import LoginPage from '@/pages/LoginPage';
import { createBrowserRouter } from 'react-router-dom';

export const router = [
  {
    element: <Layout />,
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      { path: 'intro', element: <IntroPage /> },
      { path: 'login', element: <LoginPage /> },
    ],
  },
];

export const routes = createBrowserRouter(router, { basename: '/' });
