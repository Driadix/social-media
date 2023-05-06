import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config.js';
import UnauthorizedError from '../errors/UnauthorizedError.js';

const authHandler = async (req, res, next) => {
  let token = req.header('Authorization');

  if (!token || !token.startsWith('Bearer ')) next(new UnauthorizedError('Авторизация не пройдена'));

  token = token.slice(7, token.length);

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
  } catch (error) {
    next(new UnauthorizedError('Авторизация не пройдена'));
  }

  return next();
};

export default authHandler;
