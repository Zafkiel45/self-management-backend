import './database/migrations';
import express from 'express';
// routes
import { testRoute } from './routes/test_route';
import { register } from './routes/user.routes';

const app = express();

app.use(express.json());

app.use('/test',testRoute);
app.use('/register', register);

app.listen(3001, () => {
  console.log('Backend Started');
});