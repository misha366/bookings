import HttpStatusCodes from '@src/common/constants/HttpStatusCodes';
import { InvalidCredentialsException } from '@src/common/exceptions';
import { Req, Res } from './common/express-types';

/**
 * @swagger
 * /auth/register:
 *   post:
 *     tags: [Auth]
 *     summary: Register new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password, name]
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 minLength: 6
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created
 *       422:
 *         description: Validation error
 */
async function register(req: Req, res: Res) {
  // TODO: Implement registration
  res.status(HttpStatusCodes.CREATED).json({ message: 'Register endpoint' });
}

/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags: [Auth]
 *     summary: Login user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password]
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *       401:
 *         description: Invalid credentials
 */
async function login(req: Req, res: Res) {
  // TODO: Implement real login logic
  // Test exception - remove after testing
  throw new InvalidCredentialsException();
}

/**
 * @swagger
 * /auth/me:
 *   get:
 *     tags: [Auth]
 *     summary: Get current user
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Current user data
 *       401:
 *         description: Unauthorized
 */
async function me(req: Req, res: Res) {
  // TODO: Implement get current user
  res.status(HttpStatusCodes.OK).json({ message: 'Me endpoint' });
}

export default {
  register,
  login,
  me,
} as const;
