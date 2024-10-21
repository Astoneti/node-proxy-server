const express = require('express')
const config = require('./app/config/config')
const meteorRouter = require('./app/delivery/meteor-router')
const errorHandler = require('./app/utils/error-handler')

const app = express()

app.use('/meteors',  meteorRouter);
app.use(errorHandler)

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`)
})
