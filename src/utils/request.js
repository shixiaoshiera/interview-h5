import axios from 'axios'
import { Toast } from 'vant'
import { getToken, removeToken } from '@/utils/local.js'
// js文件的this不指向vue实例，this.$router无法使用，需要进行导入
import router from '@/router'

// 封装axios
const request = axios.create({
  baseURL: 'http://interview-api-t.itheima.net',
  timeout: 5000
})

// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 有token就在请求头加token
  if (getToken()) {
    config.headers.Authorization = `Bearer ${getToken()}`
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
  // token过期、错误、没有token，删除token，跳转登录页
  if (error.response.status === 401) {
    removeToken()
    router.push('/login')
  }
  // 错误情况提示框
  Toast.fail(error.response.data.message)
  return Promise.reject(error)
})

export default request
