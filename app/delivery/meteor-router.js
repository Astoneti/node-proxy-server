const express = require('express')
const fetchMeteor = require('../services/meteor-service')

const meteorRouter = express.Router()

meteorRouter.get('/', async (req, res, next) => {
  try {
    const { date, count, wereDangerousMeteors } = req.query
    const meteorData = await fetchMeteor(
      date,
      count, 
      wereDangerousMeteors
    )
    res.json(meteorData)
  } catch (err) {
    next(err)
  }
})

module.exports = meteorRouter
