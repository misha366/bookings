import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';

import './NotFound.sass';

export function NotFound(): ReactNode {
  return (
    <div className="not-found">
      <h1 className="not-found__code">404</h1>
      <p className="not-found__text">Page not found</p>
      <Link to="/" className="not-found__link">Go Home</Link>
    </div>
  );
}
