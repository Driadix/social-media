import { Router } from 'express';
import {
  createPost,
  getFeedPosts,
  getUserPosts,
  likePost,
  dislikePost,
} from '../controllers/posts.js';

const router = Router();

router.get('/', getFeedPosts);
router.post('/', createPost);

router.get('/:userId', getUserPosts);

router.patch('/:id/like', likePost);
router.delete('/:id/like', dislikePost);

export default router;
