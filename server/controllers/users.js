import EntityExistsError from '../errors/EntityExistsError.js';
import NotFoundError from '../errors/NotFoundError.js';
import User from '../models/User.js';
import populateUser from '../utils/populateUser.js';
import tryCatch from '../utils/tryCatch.js';

export const getUser = tryCatch(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  if (!user) throw new NotFoundError('Пользователь с данным id не найден');

  res.status(200).send(user);
});

export const getUserFriends = tryCatch(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  if (!user.friendsList || user.friendsList.length === 0) throw new NotFoundError('Список друзей пользователя пуст');

  const friends = await Promise.all(
    user.friendsList.map((friendId) => User.findById(friendId)),
  );

  const formattedFriends = friends.map(
    ({
      _id, firstName, lastName, imageLink, address, job,
    }) => ({
      _id, firstName, lastName, imageLink, address, job,
    }),
  );

  res.status(200).send(formattedFriends);
});

export const addFriend = tryCatch(async (req, res) => {
  const currentUserId = req.params.id;
  const { friendId } = req.params;
  const user = await User.findById(currentUserId);
  const friend = await User.findById(friendId);

  if (user.friendsList.includes(friendId)) throw new EntityExistsError('Пользователь уже есть в вашем списке друзей');

  user.friendsList.push(friendId);
  friend.friendsList.push(currentUserId);

  await user.save();
  await friend.save();

  const populatedUser = await user.populate(populateUser());

  res.status(200).send({ populatedUser });
});

export const removeFriend = tryCatch(async (req, res) => {
  const currentUserId = req.params.id;
  const { friendId } = req.params;
  const user = await User.findById(currentUserId);
  const friend = await User.findById(friendId);

  if (!user.friendsList.includes(friendId)) throw new NotFoundError('В вашем списке друзей нет данного пользователя');

  user.friendsList = user.friendsList.filter((id) => id.toString() !== friendId);
  friend.friendsList = friend.friendsList.filter((id) => id.toString() !== currentUserId);

  await user.save();
  await friend.save();

  const populatedUser = await user.populate(populateUser());

  res.status(200).send({ populatedUser });
});
