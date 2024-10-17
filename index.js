const express = require('express')
const config = require('./config')
const meteorRoutes = require('./delivery/meteorRoutes')
const errorHandler = require('./exception/error_middleware')

const app = express()

app.use('/meteors', meteorRoutes)
app.use(errorHandler)

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`)
})
