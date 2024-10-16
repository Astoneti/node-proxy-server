const dotenv = require('dotenv');
dotenv.config();

const config = {
  port: process.env.PORT || 4000,
  startDate: process.env.START_DATE,
  endDate: process.env.END_DATE,
  apiKey: process.env.NASA_API_KEY,
  nasaApiUrl: process.env.NASA_BASE_URL,
};

module.exports = config;
