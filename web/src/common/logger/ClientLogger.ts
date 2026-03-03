import * as Sentry from '@sentry/react';

const isProduction = import.meta.env.PROD;

/**
 * Initialize Sentry for error tracking.
 * Call this once at application startup.
 */
export function initSentry(): void {
  if (isProduction && import.meta.env.VITE_SENTRY_DSN !== undefined) {
    Sentry.init({
      dsn: import.meta.env.VITE_SENTRY_DSN,
      environment: import.meta.env.MODE,
      integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration({
          maskAllText: false,
          blockAllMedia: false,
        }),
      ],
      tracesSampleRate: 0.1,
      replaysSessionSampleRate: 0.1,
      replaysOnErrorSampleRate: 1.0,
    });
  }
}

/**
 * Client logger with environment-aware behavior.
 * In production: sends to Sentry.
 * In development: logs to console.
 */
export const clientLogger = {
  debug: (message: string, context?: Record<string, unknown>): void => {
    if (!isProduction) {
      console.debug(`[DEBUG] ${message}`, context);
    }
  },

  info: (message: string, context?: Record<string, unknown>): void => {
    if (!isProduction) {
      console.info(`[INFO] ${message}`, context);
    }
  },

  warn: (message: string, context?: Record<string, unknown>): void => {
    if (isProduction) {
      Sentry.captureMessage(message, { level: 'warning', extra: context });
    } else {
      console.warn(`[WARN] ${message}`, context);
    }
  },

  error: (message: string, context?: Record<string, unknown>): void => {
    if (isProduction) {
      Sentry.captureMessage(message, { level: 'error', extra: context });
    } else {
      console.error(`[ERROR] ${message}`, context);
    }
  },

  /**
   * Capture exception and send to Sentry.
   * @param error - Error object to capture
   * @param context - Additional context to include
   */
  captureException: (error: Error, context?: Record<string, unknown>): void => {
    if (isProduction) {
      Sentry.captureException(error, { extra: context });
    } else {
      console.error('[EXCEPTION]', error, context);
    }
  },
};

export { Sentry };
