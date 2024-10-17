const axios = require('axios')
const config = require('../config')
const https = require('https')
const Exception = require('../exception/exception')
const { getStartAndEndDates } = require('../helpers/meteorHelper')

const agent = new https.Agent({
  rejectUnauthorized: false,
})

async function getMeteorData(date) {
  const { startDate, endDate } = getStartAndEndDates(date)
  const url = `${config.nasaApiUrl}/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${config.apiKey}`

  try {
    const response = await axios.get(url, { httpsAgent: agent })
    return response.data.near_earth_objects;
  } catch (err) {
    console.error('Error fetching data from NASA API:', err.message)
    throw new Exception(500, 'Failed to fetch data from NASA API')
  }
}

module.exports = {
  getMeteorData,
}
