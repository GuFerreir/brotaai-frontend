import React from 'react';
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import './global.css';

import Layout from './pages/Layout';
import KitList from './pages/KitList';
import Kit from './pages/Kit';
import UserProfile from './pages/UserProfile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
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
        element: <UserProfile />,
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
