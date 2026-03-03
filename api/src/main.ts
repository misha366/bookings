import EnvVars from './common/constants/env';
import { initSentry, logger } from './common/logger';
import server from './server';

// Initialize Sentry first (before any other code)
initSentry();

// Start the server
server.listen(EnvVars.Port, () => {
  logger.info(`Express server started on port: ${EnvVars.Port}`);
});
