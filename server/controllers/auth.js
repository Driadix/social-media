import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

import tryCatch from '../utils/tryCatch.js';
import { JWT_SECRET } from '../config.js';
import BadRequestError from '../errors/BadRequestError.js';
import UnauthorizedError from '../errors/UnauthorizedError.js';

export const register = tryCatch(async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    imageLink,
    address,
    job,
  } = req.body;

  const passwordHash = await bcrypt.hash(password, 12);
  const newUser = await User.create({
    firstName,
    lastName,
    email,
    password: passwordHash,
    imageLink,
    address,
    job,
  });

  const newUserObject = newUser.toObject();
  delete newUserObject.password;

  res.status(201).send(newUserObject);
});

export const login = tryCatch(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select('+password');
  if (!user) throw new BadRequestError('Пользователь не найден или не существует');

  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) throw new UnauthorizedError('Введены неверные учётные данные');

  const token = jwt.sign({ id: user._id }, JWT_SECRET);
  const userObject = user.toObject();
  delete userObject.password;
  res.status(200).send({ token, user: userObject });
});
