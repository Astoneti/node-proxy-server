const dotenv = require('dotenv')
dotenv.config()

const config = {
  port: process.env.PORT || 4000,
  apiKey: process.env.NASA_API_KEY,
  nasaApiUrl: process.env.NASA_BASE_URL,
  imageApiUrl: process.env.NASA_IMAGE_API_URL,
  sol: process.env.SOL,
  camera: process.env.CAMERA
}

module.exports = config
