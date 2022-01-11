import picnicAPI from "../config/api";
// import features from "../data/features";

// export const getFeatures = () => {
//   return new Promise((resolve, reject) => {
//     resolve(features);
//   })
// }
export const getFeatures = async () => {
  try {
    const response = await picnicAPI.get('/features')
    return response.data;
  } catch(err) {
    throw err
  }
}