import parks from '../data/parks';

export const getParks = () => {
  // faking a fetch request
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(parks)
    }, 500)
  })
}