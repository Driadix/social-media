import jwt from 'jsonwebtoken';
import tryCatch from '../utils/tryCatch';
import ForbiddenError from '../errors/ForbiddenError';
import { JWT_SECRET } from '../config';

export const authHandler = tryCatch(async (req, res, next) => {
  let token = req.header('Authorization');

  if (!token) throw new ForbiddenError('Доступ запрещён');

  if (token.startsWith('Bearer ')) token = token.slice(7, token.length);

  const payload = jwt.verify(token, JWT_SECRET);

  req.user = payload;
  next();
});

export default authHandler;
