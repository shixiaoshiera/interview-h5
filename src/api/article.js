import request from '@/utils/request.js'

// 获取面经列表
export const getArticleList = data => {
  return request.get('/h5/interview/query', { params: data })
}

// 点赞题目列表查询接口
export const getLikeList = data => {
  return request.get('/h5/interview/opt/list', { params: { ...data, optType: 1 } })
}

// 收藏题目列表查询接口
export const getCollectList = data => {
  return request.get('/h5/interview/opt/list', { params: { ...data, optType: 2 } })
}

// 我的页面
export const getUserInfo = _ => {
  return request.get('/h5/user/currentUser')
}

// 详情页
export const getArticleDetail = id => {
  return request.get('/h5/interview/show', { params: { id } })
}

// 点赞、取消点赞
export const addLike = id => {
  return request.post('/h5/interview/opt', { id, optType: 1 })
}

// 收藏、取消收藏
export const addCollect = id => {
  return request.post('/h5/interview/opt', { id, optType: 2 })
}
