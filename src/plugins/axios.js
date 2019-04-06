// Lib imports
import axios from 'axios'

const HTTP = axios.create({
  withCredentials: false,
  timeout: 50000,
  baseURL: `${process.env.VUE_APP_API_URL}/`
})

HTTP.interceptors.request.use((config) => {
  return config;
}, function (error) {
  return Promise.reject(error)
})

HTTP.interceptors.response.use(function (response) {
  return response;
}, function (error) {
    console.log('Error response', error.response)
  return Promise.reject(error);
});

export default HTTP