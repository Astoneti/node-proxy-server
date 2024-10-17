const { getMeteorData } = require('../repository/meteorRepository')
const { mapMeteorData, filterMeteors } = require('../helpers/meteorHelper')

const fetchMeteor = async (date, count, wereDangerousMeteors) => {
  const isCount = count ? parseInt(count) : null
  const isWereDangerousMeteors = wereDangerousMeteors === 'true'

  const meteorData = await getMeteorData()

  const mappedMeteors = mapMeteorData(meteorData)

  const dateFilter = new Date(date);
  const filteredByDate = mappedMeteors.filter(meteor => {
    const meteorDate = new Date(meteor.close_approach_date_full)
    return meteorDate.toISOString().split('T')[0] === dateFilter.toISOString().split('T')[0]
  })

  const filteredMeteors = filterMeteors(filteredByDate, isCount, isWereDangerousMeteors)

  if (isCount) {
    return { count: filteredMeteors.length > isCount ? isCount : filteredMeteors.length }
  }

  if (isWereDangerousMeteors) {
    const hasDangerous = filteredMeteors.some(meteor => meteor.is_potentially_hazardous_asteroid)
    return { wereDangerousMeteors: hasDangerous }
  }

  return filteredMeteors
}

module.exports = fetchMeteor
