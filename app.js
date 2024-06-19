import express from 'express';
import NodeCache from 'node-cache';
import dotenv from 'dotenv';
import routes from './routes/bands.js';

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT;
const cache = new NodeCache({ stdTTL: parseInt(process.env.CACHE_TTL, 10) });

app.use('/api/bands', routes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
