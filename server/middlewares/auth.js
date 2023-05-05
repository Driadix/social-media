import jwt from 'jsonwebtoken';
import tryCatch from '../utils/tryCatch.js';
import { JWT_SECRET } from '../config.js';
import UnauthorizedError from '../errors/UnauthorizedError.js';

const authHandler = tryCatch(async (req, res, next) => {
  let token = req.header('Authorization');

  if (!token) throw new UnauthorizedError('Доступ запрещён');

  if (token.startsWith('Bearer ')) token = token.slice(7, token.length);
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    next();
  } catch (error) {
    throw new UnauthorizedError('Авторизация не пройдена');
  }
});

export default authHandler;
