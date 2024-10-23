const express = require('express')
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser')
const config = require('./app/config/config')
const meteorRouter = require('./app/delivery/meteor-router')
const errorHandler = require('./app/utils/error-handler')

const app = express();

nunjucks.configure("views", {
    autoescape: true,
    express: app,
})

app.use(bodyParser.json())

app.use(express.static('public'))

app.use('/', meteorRouter)

app.use(errorHandler)

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`)
})
