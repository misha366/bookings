import { type ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

export function AuthLayout(): ReactNode {
  return <Outlet />;
}
