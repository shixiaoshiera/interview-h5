import request from '@/utils/request.js'

// 获取面经列表
export const getArticleList = data => {
  return request.get('/h5/interview/query', { params: data })
}
