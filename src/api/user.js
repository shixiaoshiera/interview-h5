import request from '@/utils/request.js'

// 注册
export const userRegister = data => {
  return request.post('/h5/user/register', data)
}

// 登录
export const userLogin = data => {
  return request.post('/h5/user/login', data)
}
