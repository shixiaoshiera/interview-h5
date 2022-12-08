import request from '@/utils/request.js'

export const userRegister = data => {
  return request.post('/h5/user/register', data)
}

export const userLogin = data => {
  return request.post('/h5/user/login', data)
}
