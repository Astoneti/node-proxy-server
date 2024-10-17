function mapMeteorData(nearEarthObjects) {
    const formattedData = [];
  
    for (const date in nearEarthObjects) {
      nearEarthObjects[date].forEach((meteor) => {
        const closeApproachData = meteor.close_approach_data[0] || {};
  
        const formattedMeteor = {
          id: meteor.id,
          name: meteor.name,
          absolute_magnitude: meteor.absolute_magnitude_h,
          estimated_diameter: {
            kilometers: {
              min: meteor.estimated_diameter.kilometers.estimated_diameter_min,
              max: meteor.estimated_diameter.kilometers.estimated_diameter_max,
            },
            meters: {
              min: meteor.estimated_diameter.meters.estimated_diameter_min,
              max: meteor.estimated_diameter.meters.estimated_diameter_max,
            },
            miles: {
              min: meteor.estimated_diameter.miles.estimated_diameter_min,
              max: meteor.estimated_diameter.miles.estimated_diameter_max,
            },
            feet: {
              min: meteor.estimated_diameter.feet.estimated_diameter_min,
              max: meteor.estimated_diameter.feet.estimated_diameter_max,
            },
          },
          is_potentially_hazardous_asteroid: meteor.is_potentially_hazardous_asteroid,
          close_approach: {
            date: closeApproachData.close_approach_date,
            date_full: closeApproachData.close_approach_date_full,
            relative_velocity_km_per_sec: parseFloat(closeApproachData.relative_velocity.kilometers_per_second),
            relative_velocity_km_per_hour: parseFloat(closeApproachData.relative_velocity.kilometers_per_hour),
            miss_distance: {
              astronomical: closeApproachData.miss_distance.astronomical,
              lunar: closeApproachData.miss_distance.lunar,
              kilometers: parseFloat(closeApproachData.miss_distance.kilometers),
              miles: parseFloat(closeApproachData.miss_distance.miles),
            },
            orbiting_body: closeApproachData.orbiting_body,
          },
          is_sentry_object: meteor.is_sentry_object,
        };
  
        formattedData.push(formattedMeteor);
      });
    }
  
    return formattedData;
  }
  
  module.exports = mapMeteorData;
  