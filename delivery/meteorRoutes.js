const express = require('express');
const getMeteorData = require('../useCases/getMeteorData');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const data = await getMeteorData();
    res.json(data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
