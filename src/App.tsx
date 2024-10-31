import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import './global.css';

import PrivateRoute from './pages/PrivateRoute';

import Layout from './pages/Layout';
import KitList from './pages/KitList';
import Kit from './pages/Kit';
import UserProfile from './pages/UserProfile';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/kit-list',
        element: <KitList />,
      },
      {
        path: '/kit',
        element: <Kit />,
      },
      {
        path: '/user',
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/welcome',
  },
]);

function App() {
  return (
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  );
}

export default App;
