import { useAppSelector } from '@/redux/hooks';
import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
type IProps = {
  children: ReactNode;
};
export default function PrivateRoute({ children }: IProps) {
  const { user, isLoading } = useAppSelector((state) => state.user);
  const pathname = useLocation();
  console.log('pathname:', pathname);

  if (isLoading) {
    return <p>Loading.............</p>;
  }
  if (!user.email && !isLoading) {
    return <Navigate to="/login" state={{ path: pathname }}></Navigate>;
  }
  return children;
}
