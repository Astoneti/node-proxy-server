const axios = require('axios');
const https = require('https');
const dotenv = require('dotenv');

dotenv.config();

const apiKey = process.env.NASA_API_KEY;
const startDate = '2024-10-07';
const endDate = '2024-10-11';
const nasaApiUrl = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${apiKey}`;

// Create an agent to ignore SSL verification
const agent = new https.Agent({
  rejectUnauthorized: false
});

async function fetchAsteroidData() {
  try {
    const response = await axios.get(nasaApiUrl, { httpsAgent: agent });
    console.log('Response from NASA API:', response.data);
  } catch (er) {
    console.error('Error fetching data from NASA API:', er.message);
  }
}

fetchAsteroidData();
