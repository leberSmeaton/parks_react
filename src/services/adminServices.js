import picnicAPI from "../config/api"

export const createPark = async (adminParkFormDetails) => {
  try {
    const response = await picnicAPI.post('/parks', adminParkFormDetails)
    return response.data
  } catch(err) {
    console.log("Sign In User " + err)
    throw err
  }
}