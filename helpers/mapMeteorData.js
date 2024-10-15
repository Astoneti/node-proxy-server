function mapMeteorData(nearEarthObjects) {
    const formattedData = [];
  
    for (const date in nearEarthObjects) {
      nearEarthObjects[date].forEach((meteor) => {
        const formattedMeteor = {
          id: meteor.id,
          name: meteor.name,
          diameter: meteor.estimated_diameter.meters,
          is_potentially_hazardous_meteor: meteor.is_potentially_hazardous_asteroid,
          close_approach_date_full: meteor.close_approach_data[0].close_approach_date_full,
          relative_velocity: meteor.close_approach_data[0].relative_velocity.kilometers_per_hour / 1000, // Convert to km/s
        };
        formattedData.push(formattedMeteor);
      });
    }
  
    return formattedData;
  }
  
  module.exports = mapMeteorData;
  