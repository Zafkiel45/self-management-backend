import './database/migrations';
import express from 'express';
// routes
import { testRoute } from './routes/test_route';

const app = express();

app.use('/test',testRoute);

app.listen(3001, () => {
  console.log('Backend Started');
});