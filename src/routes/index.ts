import express, { Request, Response } from 'express';
const router = express.Router();
import userRouter from './users';

router.use('/users', userRouter);

export default router;