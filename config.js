const dotenv = require('dotenv');
dotenv.config();

const config = {
  port: process.env.PORT || 4000,
  startDate: process.env.START_DATE || '2024-10-07',
  endDate: process.env.END_DATE || '2024-10-11',
  apiKey: process.env.NASA_API_KEY || '0h6klL5ThPhr41z22w1Sw1RAhQ3eS3DvJwdDvmay',
  nasaApiUrl: process.env.NASA_API_URL || 'https://api.nasa.gov/neo/rest/v1/feed'
};

config.nasaApiUrl = `${config.nasaApiUrl}?start_date=${config.startDate}&end_date=${config.endDate}&api_key=${config.apiKey}`;

module.exports = config;
