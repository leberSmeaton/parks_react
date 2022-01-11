import picnicAPI from "../config/api";

export const getCategories = async () => {
  try {
    const response = await picnicAPI.get('/categories')
    return response.data;
  } catch (err) {
    throw err
  }
}