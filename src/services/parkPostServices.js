import posts from '../data/posts';

export const getParkPosts = () => {
  // faking a fetch request
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(posts)
    }, 500)
  })
}