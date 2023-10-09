import axios from "axios"

// Create an Axios instance
const axiosInstance = axios.create({
  // You can set custom configuration options here
  // For example, you can set a base URL or default headers
  baseURL: "https://jsonplaceholder.typicode.com/",
})

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Modify the request config here (if needed)
    return config
  },
  (error) => {
    // Handle request errors here
    return Promise.reject(error)
  },
)

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (config) => {
    // Modify the response data here (if needed)
    // For example, you can transform the response data or handle errors
    return config
  },
  (error) => {
    // Handle response errors here
    return Promise.reject(error)
  },
)

export default axiosInstance
