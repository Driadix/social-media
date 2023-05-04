import dotenv from 'dotenv';

dotenv.config();

const { PORT = 4001, MONGO_URL, JWT_SECRET } = process.env;

export {
  PORT,
  MONGO_URL,
  JWT_SECRET,
};
