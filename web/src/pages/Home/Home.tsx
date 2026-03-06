import { type ReactNode } from 'react';

import './Home.sass';

export function Home(): ReactNode {
  return (
    <div className="home">
      <h1 className="home__title">Welcome to Bookings</h1>
      <p className="home__subtitle">Manage your bookings with ease.</p>
    </div>
  );
}
