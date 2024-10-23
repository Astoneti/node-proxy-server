export function getRecentImage(photos) {
    const photo = photos.reduce((recentImage, currentImage) => {
      return new Date(currentImage.earth_date) > new Date(recentImage.earth_date)
        ? currentImage
        : recentImage;
    });
  
    return photo.img_src;
  }
