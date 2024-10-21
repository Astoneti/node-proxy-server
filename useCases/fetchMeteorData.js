const { getMeteorData } = require('../repository/meteorRepository')
const { mapMeteorData, filterMeteors } = require('../helpers/meteorHelper')

const fetchMeteor = async (date, count, wereDangerousMeteors) => {
  let meteorsData = await getMeteorData(date);
  let mappedMeteors = await mapMeteorData(meteorsData)

  let filteredMeteors = await filterMeteors(mappedMeteors, count, wereDangerousMeteors)

  return filteredMeteors
}

module.exports = fetchMeteor
