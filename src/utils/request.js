import axios from 'axios'
import { Toast } from 'vant'
import { getToken } from '@/utils/local.js'

// 封装axios
const request = axios.create({
  baseURL: 'http://interview-api-t.itheima.net',
  timeout: 5000
})

// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if (getToken()) {
    config.headers.Authorization = getToken()
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, function (error) {
  // 对响应错误做点什么
  // debugger
  Toast.fail(error.response.data.message)
  return Promise.reject(error)
})

export default request
