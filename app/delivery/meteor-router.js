const express = require('express')
const getMeteor = require('../services/meteor-service')
const getImage = require('../services/rover-service')

const meteorRouter = express.Router()

meteorRouter.get(
  '/', 
  async (req, res, next) => {
  try {
    const { date, count, wereDangerousMeteors } = req.query
    const meteorData = await getMeteor(
      date,
      count, 
      wereDangerousMeteors
    )
    res.render('meteor.njk', { meteors: meteorData })
  } catch (err) {
    next(err)
  }
})

meteorRouter.post(
  "/image",
  async (request, response, next) => {
    try {
      const { userId, userName, userApiKey } = request.body
      const image = await getImage(userApiKey)
      return response.json({ userId, userName, image })
    } catch (error) {
      next(error)
    }
  }
)

module.exports = meteorRouter
