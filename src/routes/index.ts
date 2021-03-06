import express, { Request, Response } from 'express';
const router = express.Router();
import userRouter from './users';
import authRouter from './auth';

router.use('/users', userRouter);
router.use('/auth', authRouter);

export default router;