import Layout from '@/components/Layout';

import Intro from '@/pages/login';
import Login from '@/pages/login/Login';
import Error from '@/pages/error/Error';
import { createBrowserRouter } from 'react-router-dom';
import { ROUTE_PATH } from '@/constant/routes';
import { Suspense } from 'react';
import Spinner from '@/components/Spinner';

export const router = [
  {
    element: <Layout />,
    path: ROUTE_PATH.HOME,
    errorElement: <Error />,
    children: [
      {
        path: ROUTE_PATH.INTRO,
        element: (
          <Suspense fallback={<Spinner />}>
            <Intro />
          </Suspense>
        ),
      },
      {
        path: ROUTE_PATH.LOGIN,
        element: (
          <Suspense fallback={<Spinner />}>
            <Login />
          </Suspense>
        ),
      },
    ],
  },
];

export const routes = createBrowserRouter(router, { basename: '/' });
