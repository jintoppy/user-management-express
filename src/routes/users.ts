import express from 'express';
import { authMiddleware } from '../controllers/auth';
import { getUsers, getUser, addUser } from '../controllers/users';
const router = express.Router();


router.get('/', authMiddleware, getUsers);
router.get('/:userId', authMiddleware, getUser);
router.post('/', authMiddleware, addUser);

export default router;