import parks from '../data/parks';

export const getParks = () => {
  // faking a fetch request
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(parks)
    }, 2000)
  })
}

export const getPark = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(parks.find(park => park.id == id))
    }, 2000)
  })
}

