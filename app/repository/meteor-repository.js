const axios = require('axios')
const config = require('../config/config')
const https = require('https')
const { getStartAndEndDates } = require('../helpers/meteor-helper')

const agent = new https.Agent({
  rejectUnauthorized: false,
})

async function getMeteorData(date) {
  const { startDate, endDate } = getStartAndEndDates(date)
  const url = `${config.nasaApiUrl}/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${config.apiKey}`

    const res = await axios.get(url, { httpsAgent: agent })
    return res.data.near_earth_objects
}

module.exports = {
  getMeteorData
}
