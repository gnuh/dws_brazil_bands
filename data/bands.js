import dotenv from 'dotenv';
import fetch from 'node-fetch';
dotenv.config();
const apiUrl = process.env.API_URL;

async function fetchBandsData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching band data:', error);
    throw error;
  }
}

export { fetchBandsData };
