import * as Sentry from '@sentry/react';
import { type ReactNode } from 'react';

interface ErrorFallbackProps {
  error: Error;
  resetError: () => void;
}

function ErrorFallback({ error, resetError }: ErrorFallbackProps): ReactNode {
  return (
    <div className="error-fallback">
      <h1 className="error-fallback__title">Something went wrong</h1>
      <p className="error-fallback__message">
        {import.meta.env.DEV ? error.message : 'An unexpected error occurred.'}
      </p>
      <button
        type="button"
        className="button button-primary"
        onClick={resetError}
      >
        Try again
      </button>
    </div>
  );
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

export function ErrorBoundary({ children }: ErrorBoundaryProps): ReactNode {
  return (
    <Sentry.ErrorBoundary
      fallback={({ error, resetError }) => (
        <ErrorFallback error={error as Error} resetError={resetError} />
      )}
      onError={(error) => {
        if (import.meta.env.DEV) {
          console.error('ErrorBoundary caught:', error);
        }
      }}
    >
      {children}
    </Sentry.ErrorBoundary>
  );
}
