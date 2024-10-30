import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import './global.css';

import App from './App';
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
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>
);
