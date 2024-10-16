const axios = require('axios');
const https = require('https');
const config = require('../config');
const Exception = require('../exception/exception');

const agent = new https.Agent({
  rejectUnauthorized: false,
});

async function fetchMeteorData() {
  const url = `${config.nasaApiUrl}/neo/rest/v1/feed?start_date=${config.startDate}&end_date=${config.endDate}&api_key=${config.apiKey}`;

  try {
    const response = await axios.get(url, { httpsAgent: agent });
    return response.data.near_earth_objects;
  } catch (err) {
    console.error('Error fetching data from NASA API:', err.message);
    throw new Exception(500, 'Failed to fetch data from NASA API');
  }
}

module.exports = {
  fetchMeteorData,
};
