const express = require('express')
const config = require('./app/config/config')
const meteorRoutes = require('./app/controllers/meteor-controller')
const errorHandler = require('./app/utils/error-handler')

const app = express()

app.use('/meteors', meteorRoutes)
app.use(errorHandler)

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`)
})
