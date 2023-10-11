import Config from "."
import { STORAGE_KEYS, loadString } from "app/utils/storage"
import axios, { AxiosError, AxiosInstance } from "axios"

const axiosInstance: AxiosInstance = axios.create({
  baseURL: Config.API_URL,
})

// Add an interceptor to include the Bearer token in the request headers
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await loadString(STORAGE_KEYS.USER_TOKEN)

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const axiosError = error as AxiosError
    return Promise.reject({
      status: axiosError.response?.status,
      data: axiosError.response?.data || axiosError.message,
    })
  },
)

export default axiosInstance
