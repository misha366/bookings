import { NextFunction, Request, Response } from 'express';

import { captureException, logger } from '../logger';

interface ExceptionMapping {
  status: number;
  code: string;
}

export const exceptionMapping: Record<string, ExceptionMapping> = {
  BookingNotFoundException: { status: 404, code: 'BOOKING_NOT_FOUND' },
  UserNotFoundException: { status: 404, code: 'USER_NOT_FOUND' },
  InvalidCredentialsException: { status: 401, code: 'INVALID_CREDENTIALS' },
};

/**
 * Global exception handler middleware.
 * Catches all errors and returns proper HTTP response.
 */
export function globalExceptionHandler(
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction,
): void {
  const mapping = exceptionMapping[err.name];

  if (mapping !== undefined) {
    // Known exception — log as warning, return mapped response
    logger.warn(`${err.name}: ${err.message}`, {
      path: req.path,
      method: req.method,
    });

    res.status(mapping.status).json({
      error: {
        code: mapping.code,
        message: err.message,
      },
    });
    return;
  }

  // Unknown error → capture to Sentry + log + return 500
  captureException(err, {
    path: req.path,
    method: req.method,
    body: req.body,
    query: req.query,
  });

  res.status(500).json({
    error: {
      code: 'INTERNAL_ERROR',
      message: 'Internal server error',
    },
  });
}
