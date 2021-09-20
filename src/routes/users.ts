import express from 'express';
import { authMiddleware } from '../controllers/auth';
import { getUsers, getUser, addUser } from '../controllers/users';
const router = express.Router();


router.get('/', getUsers);
router.get('/:userId', getUser);
router.post('/', addUser);

export default router;