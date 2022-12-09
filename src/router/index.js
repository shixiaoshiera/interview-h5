import Vue from 'vue'
import VueRouter from 'vue-router'
import { getToken } from '@/utils/local.js'

// 一级路由
import detail from '@/views/detail.vue'
import layout from '@/views/layout.vue'
import login from '@/views/login.vue'
import register from '@/views/register.vue'

// 二级路由
import article from '@/views/article.vue'
import collect from '@/views/collect.vue'
import like from '@/views/like.vue'
import user from '@/views/user.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/layout' },
  { path: '/detail', component: detail },
  { path: '/login', component: login },
  { path: '/register', component: register },
  {
    path: '/layout',
    component: layout,
    children: [
      { path: '/', redirect: '/article' },
      { path: '/article', component: article },
      { path: '/collect', component: collect },
      { path: '/like', component: like },
      { path: '/user', component: user }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 页面拦截白名单
const whiteList = ['/login', '/register']

router.beforeEach((to, from, next) => {
  // console.log(to, from)

  // 白名单或有token不拦截，其余情况一律跳转登录页
  if (whiteList.includes(to.path) || getToken()) {
    next()
  } else {
    next('/login')
  }
})

export default router
