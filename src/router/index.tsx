import Layout from '@/components/Layout';

import Intro from '@/pages/Intro/intro';
import Login from '@/pages/login/login';
import Error from '@/pages/error/error';

import { createBrowserRouter } from 'react-router-dom';
import { ROUTE_PATH } from '@/constant/routes';
import { Suspense } from 'react';

import StudyRooms from '@/pages/StudyRooms/study-rooms';
import Spinner from '@/components/common/spinner/spinner';

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
      {
        path: ROUTE_PATH.STUDY_ROOMS,
        element: (
          <Suspense fallback={<Spinner />}>
            <StudyRooms />
          </Suspense>
        ),
      },
    ],
  },
];

export const routes = createBrowserRouter(router, { basename: '/' });
