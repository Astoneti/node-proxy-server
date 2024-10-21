const express = require('express')
const fetchMeteor = require('../services/meteor-service')

const router = express.Router()

router.get('/', async (req, res, next) => {
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

module.exports = router
