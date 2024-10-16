const { fetchMeteorData } = require('../repository/nasaRepository');
const mapMeteorData = require('../helpers/mapMeteorData');

async function getMeteorData() {
  const data = await fetchMeteorData();
  return mapMeteorData(data);
}

module.exports = getMeteorData;
