import Layout from '@/components/Layout';

import Intro from '@/pages/Intro/intro';

import Error from '@/pages/error/error';

import { createBrowserRouter } from 'react-router-dom';
import { ROUTE_PATH } from '@/constant/routes';
import { Suspense } from 'react';

import StudyRooms from '@/pages/study-rooms/study-rooms';
import Spinner from '@/components/common/spinner/spinner';
import Login from '@/pages/login/Login';
import StudyRoom from '@/pages/study-room/study-room';
import AccessControl from '@/pages/login/components/access-control';

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
        path: ROUTE_PATH.STUDY_ROOM,
        element: (
          <Suspense fallback={<Spinner />}>
            <AccessControl>
              <StudyRoom />
            </AccessControl>
          </Suspense>
        ),
      },
      {
        path: ROUTE_PATH.STUDY_ROOMS,
        element: (
          <Suspense fallback={<Spinner />}>
            <AccessControl>
              <StudyRooms />
            </AccessControl>
          </Suspense>
        ),
      },
    ],
  },
];

export const routes = createBrowserRouter(router, { basename: '/' });
