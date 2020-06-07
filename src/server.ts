import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import { errors } from 'celebrate';

import routes from './routes';

dotenv.config({
  path:
    process.env.NODE_ENV === 'development'
      ? '.env.development'
      : '.env.production',
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(process.env.PORT || 5000, () =>
  console.log(
    '🚀 Server started at port 5000',
    process.env.NODE_ENV,
    process.env.URL
  )
);
