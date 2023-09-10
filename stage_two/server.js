import express from 'express';
import router from './routes';
import dbClient from './utils/db';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', router);

app.listen(3000, () => {
  dbClient();
  console.log(`Server is listening on port ${PORT}`);
});
