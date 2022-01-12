import axios from "axios";

const picnicAPI = axios.create({
  // baseURL: process.env.REACT_APP_PICNIC_API
    /* 
      Get Park Post Error: Request failed with status code 404
    */
  baseURL: "http://localhost:3000" 
    /*
      Access to XMLHttpRequest at 'http://localhost:3000/posts/undefined' from origin 'http://localhost:3001' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource
    */
})

// cb function uses the request to add jwt to header

picnicAPI.interceptors.request.use(req => {
  const jwt = sessionStorage.getItem('jwt');
  if (jwt) {
    req.headers["Authorization"] = `Bearer ${jwt}`
  }
  return req;
})

export default picnicAPI;

export function parseError(error) {
  const {response} = error;
  if(!response) return "Oops something went wrong";
  if(response.data.error) return response.data.error;
  if(response.data.errors) return response.data.errors.join(", ");
}