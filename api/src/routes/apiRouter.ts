import { Router } from 'express';

import Paths from '@src/common/constants/Paths';
import AuthRoutes from './AuthRoutes';

const apiRouter = Router();

// Auth routes
const authRouter = Router();
authRouter.post(Paths.Auth.Register, AuthRoutes.register);
authRouter.post(Paths.Auth.Login, AuthRoutes.login);
authRouter.get(Paths.Auth.Me, AuthRoutes.me);

apiRouter.use(Paths.Auth._, authRouter);

export default apiRouter;
