const { getImages } = require('../repository/image-repository')
const { getRecentImage } = require('../helpers/image-helper')

const getImage = async (apiKey) => {
    const roverImages = await getImages(apiKey)
    const recentImage = await getRecentImage(roverImages.photos)
    return recentImage
}

module.exports = getImage