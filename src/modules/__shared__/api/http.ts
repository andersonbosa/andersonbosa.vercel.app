import axios from 'axios'

const http = axios.create({
  baseURL: process.env.PRIVATE_BACKEND_BASE_URL
})

http.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config
})

export { http }