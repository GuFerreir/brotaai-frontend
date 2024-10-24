import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import './index.css';

import App from './App';
import Layout from './pages/Layout';
import KitList from './pages/KitList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/kit-list',
        element: <KitList />,
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
