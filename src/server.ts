import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import { errors } from 'celebrate';

import routes from './routes';
import KnexMigrator from './database/knexMigrator';

dotenv.config();
KnexMigrator();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(process.env.PORT || 5000, () => console.log('🚀 Server started'));
