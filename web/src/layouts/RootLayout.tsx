import { type ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../components/Header';

import './RootLayout.sass';

export function RootLayout(): ReactNode {
  return (
    <div className="root-layout">
      <Header />

      <main className="root-layout__main">
        <Outlet />
      </main>
    </div>
  );
}
