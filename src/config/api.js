import axios from "axios";

const picnicAPI = axios.create({
  baseURL: process.env.REACT_APP_PICNIC_API
})

export default picnicAPI;

export function parseError(error) {
  const {response} = error;
  if(!response) return "Oops something went wrong";
  if(response.data.error) return response.data.error;
  if(response.data.errors) return response.data.errors.join(", ");
}