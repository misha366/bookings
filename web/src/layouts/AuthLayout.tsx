import { type ReactNode } from 'react';

import { Outlet } from 'react-router-dom';

export const AuthLayout = (): ReactNode => {
  return <Outlet />;
}
