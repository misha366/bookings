import { createBrowserRouter, type RouteObject } from 'react-router-dom';

import { AuthLayout, RootLayout } from '../layouts';
import { CalendarPage, Home, Login, MyBookings, NotFound, Register } from '../pages';

const routes: RouteObject[] = [
  {
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'calendar',
        element: <CalendarPage />,
      },
      {
        path: 'my-bookings',
        element: <MyBookings />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
