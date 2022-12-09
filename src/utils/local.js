const KEY = 'my-token-vant-mobile'

// 设置token
export const setToken = token => {
  localStorage.setItem(KEY, token)
}

// 获取token
export const getToken = () => {
  return localStorage.getItem(KEY)
}

// 移除token
export const removeToken = () => {
  localStorage.removeItem(KEY)
}
