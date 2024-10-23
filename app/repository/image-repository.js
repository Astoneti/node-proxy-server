const axios = require('axios')
const config = require('../config/config')
const https = require('https')

const agent = new https.Agent({
    rejectUnauthorized: false
})

const getImages = async () => {
    const url = `${config.imageApiUrl}?sol=${config.sol}&camera=${config.camera}&api_key=${config.apiKey}`
    const res = await axios.get(url, { httpsAgent: agent })
    return res.data
  };

  module.exports = {
    getImages
  }
