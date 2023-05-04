/* eslint-disable no-console */
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import errorHandler from './middlewares/errorHandler.js';
import { PORT, MONGO_URL } from './config.js';
import routes from './routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(helmet(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' })));
app.use(morgan('common'));
app.use(cors());
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

app.use(routes);

app.use(errorHandler);

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  app.listen(PORT, () => {
    console.log(`SERVER IS STARTED ON PORT: ${PORT}`);
  });
}).catch((error) => console.log('Error while starting server: ', error));
