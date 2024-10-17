const express = require('express')
const fetchMeteor = require('../useCases/fetchMeteorData')
const Exception = require('../exception/exception')

const meteorRouter = express.Router()

meteorRouter.get('/', async (req, res, next) => {
  try {
    const { date, count, wereDangerousMeteors } = req.query

    const meteorData = await fetchMeteor(date, count, wereDangerousMeteors);
  
    res.json(meteorData)
  } catch (err) {
    next(new Exception(err.code || 500, err.message || 'An error occurred'))
  }
});

module.exports = meteorRouter
