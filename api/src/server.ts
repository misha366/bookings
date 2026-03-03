import express, { Request, Response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';

import Paths from '@src/common/constants/Paths';
import { swaggerSpec } from '@src/common/swagger';
import { globalExceptionHandler } from '@src/common/exceptions';
import BaseRouter from '@src/routes/apiRouter';

import EnvVars, { NodeEnvs } from './common/constants/env';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging
if (EnvVars.NodeEnv === NodeEnvs.DEV) {
  app.use(morgan('dev'));
}

// Security
if (EnvVars.NodeEnv === NodeEnvs.PRODUCTION) {
  if (!process.env.DISABLE_HELMET) {
    app.use(helmet());
  }
}

// Swagger (disabled in production)
if (EnvVars.NodeEnv !== NodeEnvs.PRODUCTION) {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

// API routes
app.use(Paths._, BaseRouter);

// Health check
app.get('/health', (_: Request, res: Response) => {
  res.json({ status: 'ok' });
});

// Global error handler
app.use(globalExceptionHandler);

export default app;
