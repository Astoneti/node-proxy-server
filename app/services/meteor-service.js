const { getMeteorData } = require('../repository/meteor-repository')
const { mapMeteorData, filterMeteors } = require('../helpers/meteor-helper')

const getMeteor = async (date, count, wereDangerousMeteors) => {
  let meteorsData = await getMeteorData(date);
  let mappedMeteors = mapMeteorData(meteorsData)

  let filteredMeteors = await filterMeteors(mappedMeteors, count, wereDangerousMeteors)

  return filteredMeteors
}

module.exports = getMeteor
