import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import './styles/index.sass';

import { initSentry } from './common';
import { ErrorBoundary } from './components/ErrorBoundary';
import { router } from './router';
import { store } from './store';

// Initialize Sentry first (before any other code)
initSentry();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </Provider>
  </StrictMode>,
);
