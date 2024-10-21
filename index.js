const express = require('express');
const nunjucks = require('nunjucks');
const config = require('./app/config/config');
const meteorRouter = require('./app/delivery/meteor-router');
const errorHandler = require('./app/utils/error-handler');

const app = express();

nunjucks.configure("views", {
    autoescape: true,
    express: app,
})

app.use(express.static('public'))

app.use('/meteors', meteorRouter)
app.use(errorHandler)

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`)
});
