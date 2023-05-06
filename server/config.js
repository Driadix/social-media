import dotenv from 'dotenv';

dotenv.config();

export const { PORT = 4001, MONGO_URL, JWT_SECRET } = process.env;
