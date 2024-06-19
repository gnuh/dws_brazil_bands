import { fetchBandsData } from '../data/bands.js';
import NodeCache from 'node-cache';
const cache = new NodeCache({ stdTTL: parseInt(process.env.CACHE_TTL, 10) });

async function bandsController(req, res) {
  try {
    let bandsData = cache.get('bandsData');

    if (!bandsData) {
      bandsData = await fetchBandsData();
      cache.set('bandsData', bandsData);
    }

    res.json(bandsData);
  } catch (error) {
    console.error(error);
  }
}

export default bandsController;
