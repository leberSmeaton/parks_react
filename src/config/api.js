import axios from "axios";

const picnicAPI = axios.create({
  baseURL: process.env.REACT_APP_PICNIC_API
})

export default picnicAPI;