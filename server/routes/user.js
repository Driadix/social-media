import { Router } from 'express';
import {
  getUser,
  getUserFriends,
  addFriend,
  removeFriend,
} from '../controllers/users.js';

const router = Router();

router.get('/:id', getUser);
router.get('/:id/friends', getUserFriends);

router.patch('/:id/:friendId', addFriend);
router.delete('/:id/:friendId', removeFriend);

export default router;
