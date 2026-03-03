import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import './styles/index.sass';

import { initSentry } from './common/logger';
import { ErrorBoundary } from './components/ErrorBoundary';
import { router } from './router';

// Initialize Sentry first (before any other code)
initSentry();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </StrictMode>,
);
