const { getMeteorData } = require('../repository/meteor-repository')
const { mapMeteorData, filterMeteors } = require('../helpers/meteor-helper')

const getMeteor = async (date, count, wereDangerousMeteors) => {
  const meteorsData = await getMeteorData(date);
  const mappedMeteors = mapMeteorData(meteorsData)

  const filteredMeteors = await filterMeteors(mappedMeteors, count, wereDangerousMeteors)

  return filteredMeteors
}

module.exports = getMeteor
