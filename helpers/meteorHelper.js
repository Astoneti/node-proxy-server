export function mapMeteorData(data) {
  return Object.values(data).flatMap((meteors) =>
    meteors.map((item) => {
      const { relative_velocity, close_approach_date_full } =
        extractCloseApproachData(item.close_approach_data)

      return {
        id: item.id,
        name: item.name,
        diameter: getDiameter(item.estimated_diameter),
        is_potentially_hazardous_asteroid:
          item.is_potentially_hazardous_asteroid,
        close_approach_date_full,
        relative_velocity,
      }
    })
  )
}

const extractCloseApproachData = (closeApproachData) => {
  if (!closeApproachData || closeApproachData.length === 0) {
    return { relative_velocity: null, close_approach_date_full: null }
  }

  return {
    relative_velocity:
      closeApproachData[0].relative_velocity.kilometers_per_second,
    close_approach_date_full: closeApproachData[0].close_approach_date_full,
  }
}

const getDiameter = (diameter) => {
  return (
    (diameter.meters.estimated_diameter_min +
      diameter.meters.estimated_diameter_max) / 2
  )
}

export function filterMeteors(meteors, count, wereDangerousMeteors) {
  if (wereDangerousMeteors != null) {
    const isWereDangerousMeteors = wereDangerousMeteors; // No need to convert again
    meteors = meteors.filter(meteor => 
      meteor.is_potentially_hazardous_asteroid === isWereDangerousMeteors
    );
  }

  if (count != null && !isNaN(count) && count > 0) {
    meteors = meteors.slice(0, count); // Limit the number of meteors returned
  }

  return meteors;
}


export function getStartAndEndDates(date) {
  const givenDate = date ? new Date(date) : new Date()
  const dayOfWeek = givenDate.getDay()
  
  const startDate = new Date(givenDate)
  startDate.setDate(givenDate.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1))
  
  const endDate = new Date(startDate)
  endDate.setDate(startDate.getDate() + 4)

  return {
    startDate: formatDate(startDate),
    endDate: formatDate(endDate),
  }
}

function formatDate(date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}
