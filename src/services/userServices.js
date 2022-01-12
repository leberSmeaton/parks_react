import picnicAPI from "../config/api"

export const signInUser = async (signInDetails) => {
  try {
    const response = await picnicAPI.get('/auth/signin', signInDetails)
    return response.data
  } catch(err) {
    console.log("Sign In User " + err)
    throw err
  }
}
// export const signInUser = (signInDetails) => {
//   return new Promise((resolve, reject) => {
//     resolve(signInDetails.username)
//   })
// }