// import posts from '../data/posts';

// import parks from '../data/parks';

import picnicAPI from '../config/api';

// we don't need this for id and date when database is connected

// PARKS
// export const getParkPosts = () => {
//   // faking a fetch request
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(parks)
//     }, 2000)
//   })
// }

export const getParkPosts = async() => {
  try {
    const response = await picnicAPI.get('/parks')
    // console.log("response: " + response);
    console.log(response);
    return response.data;
  } catch (err) {
    console.log("Get Park Posts " + err)
    throw err
  }
}

// export const getParkPost = (parks, id) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(parks.sort(park => park.id === parseInt(id)))
//     }, 500)
//   })
// }

export const getParkPost = async (id) => {
  try {
    const response = await picnicAPI.get('/parks/' + id)
    // const response = await picnicAPI.get('/parks/' + park_id) // 
    // const response = await picnicAPI.get('/park') // ????????
    console.log(response);
    return response.data;
  } catch (err) {
    console.log("Get Park Post " + err)
    throw err
  }
}

/////// PARK COMMENTS

// export const getPosts = () => {
//   // faking a fetch request for posts
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(posts)
//     }, 2000)
//   })
// }

export const getPosts = async (park_id) => {
  try {
    // const response = await picnicAPI.get('/posts')
    const response = await picnicAPI.get('/parks/' + park_id + '/comments')
    // const response = await picnicAPI.get('/parks/' + park_id + '/comments')
    console.log(response);
    return response.data;
  } catch (err) {
    console.log("Get Posts " + err)
    throw err
  }
}

// export const getPost = (posts, id) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(posts.sort(post => post.id === parseInt(id)))
//     }, 500)
//   })
// }


export const getPost = async (id) => {
  try {
    // const response = await picnicAPI.get('/posts/' + id)
    // const response = await picnicAPI.get('/parks/' + id + '/comments/' + id)
    const response = await picnicAPI.get('/parks/comments/' + id) // ?
    // const response = await picnicAPI.get('/review')
    console.log(response);
    return response.data;
  } catch (err) {
    console.log("Get Post " + err)
    throw err
  }
}




// don't think this is needed as the api database already has id
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

// CREATE/POST COMMENT
export const createNewParkPost = async (parkPostObject) => {
  try {
    const response = await picnicAPI.post('/posts', parkPostObject)
    return response.data;
  } catch (err) {
    console.log("Create New Park Post " + err)
    throw err
  }
}
