import Layout from '@/components/Layout';

import Intro from '@/pages/intro/intro';

import Error from '@/pages/error/error';

import { createBrowserRouter } from 'react-router-dom';
import { ROUTE_PATH } from '@/constant/routes';
import { Suspense } from 'react';

import StudyRooms from '@/pages/study-rooms/study-rooms';
import Spinner from '@/components/common/spinner/spinner';
import Login from '@/pages/login/login';
import StudyRoom from '@/pages/study-room/study-room';

export const router = [
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: ROUTE_PATH.INTRO,
        element: <Intro />,
      },
      {
        path: ROUTE_PATH.LOGIN,
        element: <Login />,
      },
      {
        path: ROUTE_PATH.STUDY_ROOM,
        element: (
          <Suspense fallback={<Spinner />}>
            <StudyRoom />
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
