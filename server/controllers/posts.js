import tryCatch from '../utils/tryCatch.js';
import Post from '../models/Post.js';
import NotFoundError from '../errors/NotFoundError.js';
import populatePost from '../utils/populatePost.js';

export const createPost = tryCatch(async (req, res) => {
  const { owner, description, postImage } = req.body;
  
  const post = await Post.create({ owner, description, postImage });
  const populatedPost = await post.populate(populatePost());

  res.status(201).send(populatedPost);
});

export const getFeedPosts = tryCatch(async (req, res) => {
  const posts = await Post.find({}).populate(populatePost());

  if (!posts) throw new NotFoundError('Не удается найти посты или их не существует');

  res.status(200).send(posts);
});

export const getUserPosts = tryCatch(async (req, res) => {
  const { userId } = req.params;
  const userPosts = await Post.find({ owner: userId }).populate(populatePost());

  if (!userPosts) throw new NotFoundError('Не удается найти посты или их не существует');

  res.status(200).send(userPosts);
});

export const deletePost = tryCatch(async (req, res) => {
  const post = await Post.findByIdAndRemove(req.params.id,);

  if (!post) throw new NotFoundError('Не найдено поста по данному id');

  res.status(200).send(post);
});

export const likePost = tryCatch(async (req, res) => {
  const post = await Post.findByIdAndUpdate(
    req.params.id,
    { $addToSet: { likes: req.user.id } },
    { new: true },
  ).populate(populatePost());

  if (!post) throw new NotFoundError('Не найдено поста по данному id');

  res.status(200).send(post);
});

export const dislikePost = tryCatch(async (req, res) => {
  const post = await Post.findByIdAndUpdate(
    req.params.id,
    { $pull: { likes: req.user.id } },
    { new: true },
  ).populate(populatePost());

  if (!post) throw new NotFoundError('Не найдено поста по данному id');

  res.status(200).send(post);
});