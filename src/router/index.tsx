import Layout from '@/components/layout/layout';

import Home from '@/pages/home/home';

import Error from '@/pages/error/error';

import { ROUTE_PATH } from '@/constant/routes';
import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import ModalProvider from '@/provider/modal-provider';
import SockJSProvider from '@/provider/sockjs-provider';

import AppRoute from '@/components/common/app-route/app-route';
import Spinner from '@/components/common/spinner/spinner';

import StudyRoom from '@/pages/study-room/study-room';
import StudyRooms from '@/pages/study-rooms/study-rooms';
import ErrorBoundary from '@/components/common/error-boundary/error-boundary';

export const router = [
  {
    element: (
      <ModalProvider>
        <Layout />
      </ModalProvider>
    ),
    errorElement: <Error />,
    children: [
      {
        path: `${ROUTE_PATH.STUDY_ROOMS}/:id`,
        element: (
          <Suspense fallback={<Spinner />}>
            <ErrorBoundary>
              <SockJSProvider>
                <StudyRoom />
              </SockJSProvider>
            </ErrorBoundary>
          </Suspense>
        ),
      },
      {
        path: ROUTE_PATH.STUDY_ROOMS,
        element: (
          <Suspense fallback={<Spinner />}>
            <ErrorBoundary>
              <StudyRooms />
            </ErrorBoundary>
          </Suspense>
        ),
      },
    ],
  },
  {
    path: ROUTE_PATH.HOME,
    element: (
      <AppRoute>
        <Home />,
      </AppRoute>
    ),
  },
];

export const routes = createBrowserRouter(router);
