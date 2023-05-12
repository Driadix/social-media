import { Router } from 'express';
import {
  createPost,
  getFeedPosts,
  getUserPosts,
  deletePost,
  likePost,
  dislikePost,
} from '../controllers/posts.js';
import multerMiddleware from '../middlewares/multer.js'

const router = Router();

router.get('/', getFeedPosts);
router.post('/', multerMiddleware.upload('picture'), createPost);

router.get('/:userId', getUserPosts);

router.delete('/:id', deletePost);

router.patch('/:id/like', likePost);
router.delete('/:id/like', dislikePost);

export default router;
