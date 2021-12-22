import features from "../data/features";

export const getFeatures = () => {
  return new Promise((resolve, reject) => {
    resolve(features);
  })
}