import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import authStore from '../stores/auth';

type PrivateRouteProps = {
  children: ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isLoggedIn } = authStore();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;

