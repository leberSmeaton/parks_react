import posts from '../data/posts';

import parks from '../data/parks';

// we don't need this for id and date when database is connected

// PARKS
export const getParkPosts = () => {
  // faking a fetch request
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(parks)
    }, 2000)
  })
}

export const getParkPost = (parks, id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(parks.find(park => park.id === parseInt(id)))
    }, 500)
  })
}

// POSTS
export const getPosts = () => {
  // faking a fetch request for posts
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(posts)
    }, 2000)
  })
}

export const getPost = (posts, id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(posts.find(post => post.id === parseInt(id)))
    }, 500)
  })
}




// const getNextId = () => {
//   const maxId = Math.max(...posts.map(post => post.id));
//   return maxId + 1;
// }

// export const createNewParkPost = (parkPostObject) => {
//   const newParkPost = {
//     ...parkPostObject,
//     updated_at: Date.now(),
//     id: getNextId()
//   }

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(newParkPost);
//     }, 500)
//   })
// }