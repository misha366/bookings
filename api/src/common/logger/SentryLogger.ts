import * as Sentry from '@sentry/node';

const isProduction = process.env.NODE_ENV === 'production';

export function initSentry(): void {
  if (isProduction && process.env.SENTRY_DSN !== undefined) {
    Sentry.init({
      dsn: process.env.SENTRY_DSN,
      environment: process.env.NODE_ENV,
      tracesSampleRate: 0.1,
    });
  }
}

export const logger = {
  debug: (message: string, context?: Record<string, unknown>): void => {
    if (!isProduction) {
      console.debug(`[DEBUG] ${message}`, context ?? '');
    }
  },

  info: (message: string, context?: Record<string, unknown>): void => {
    if (isProduction) {
      Sentry.captureMessage(message, { level: 'info', extra: context });
    } else {
      console.info(`[INFO] ${message}`, context ?? '');
    }
  },

  warn: (message: string, context?: Record<string, unknown>): void => {
    if (isProduction) {
      Sentry.captureMessage(message, { level: 'warning', extra: context });
    } else {
      console.warn(`[WARN] ${message}`, context ?? '');
    }
  },

  error: (message: string, context?: Record<string, unknown>): void => {
    if (isProduction) {
      Sentry.captureMessage(message, { level: 'error', extra: context });
    } else {
      console.error(`[ERROR] ${message}`, context ?? '');
    }
  },

  captureException: (error: Error, context?: Record<string, unknown>): void => {
    if (isProduction) {
      Sentry.captureException(error, { extra: context });
    } else {
      console.error('[EXCEPTION]', error, context ?? '');
    }
  },
};

export { Sentry };
