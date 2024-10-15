const express = require('express');
const { getMeteorData } = require('../useCases/getMeteorData');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = await getMeteorData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch data from NASA API' });
  }
});

module.exports = router;
