const express = require('express')
const config = require('./app/config/config')
const controller = require('./app/controllers/meteor-controller')
const errorHandler = require('./app/utils/error-handler')

const app = express()

app.use(controller)
app.use(errorHandler)

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`)
})
