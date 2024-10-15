const axios = require('axios');
const https = require('https');
const { nasaApiUrl } = require('../config');

const agent = new https.Agent({
  rejectUnauthorized: false,
});

async function fetchMeteorData() {
  try {
    const response = await axios.get(nasaApiUrl, { httpsAgent: agent });
    return response.data;
  } catch (err) {
    console.error('Error fetching data from NASA API:', err.message);
    throw new Error('Failed to fetch data from NASA API');
  }
}

module.exports = {
  fetchMeteorData,
};
