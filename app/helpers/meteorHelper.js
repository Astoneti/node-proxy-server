export function mapMeteorData(data) {
  return Object.values(data).flatMap((meteors) =>
    meteors.map((item) => {
      const { relative_velocity, close_approach_date_full } =
        extractCloseApproachData(item.close_approach_data || [])

      return {
        id: item.id,
        name: item.name,
        diameter: getDiameter(item.estimated_diameter || {}),
        is_potentially_hazardous_asteroid:
          !!item.is_potentially_hazardous_asteroid,
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
  if (!diameter?.meters) return null;
  const { estimated_diameter_min, estimated_diameter_max } = diameter.meters;

  return (estimated_diameter_min + estimated_diameter_max) / 2 || null;
};


export function filterMeteors(meteors, count, wereDangerousMeteors) {
  if (wereDangerousMeteors != null) {
    const isDangerousMeteors = wereDangerousMeteors === "true";
    meteors = meteors.filter(
      (meteor) => meteor.is_potentially_hazardous_asteroid === isDangerousMeteors
    );
  }

  const parsedCount = parseInt(count, 10);
  if (!isNaN(parsedCount) && parsedCount > 0) {
    meteors = meteors.slice(0, parsedCount);
  }

  return meteors;
}

export function getStartAndEndDates(date) {
  let startDate, endDate;

  if (Array.isArray(date) && date.length === 2) {
    startDate = new Date(date[0])
    endDate = new Date(date[1])
  } else {
    const givenDate = date ? new Date(date) : new Date()
    const dayOfWeek = givenDate.getDay()

    startDate = new Date(givenDate)
    startDate.setDate(givenDate.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1))

    endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 4)
  }

  return {
    startDate: formatDate(startDate),
    endDate: formatDate(endDate),
  };
}

function formatDate(date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}
