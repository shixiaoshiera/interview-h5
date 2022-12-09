import Vue from 'vue'
import VueRouter from 'vue-router'

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
  { path: '/', redirect: '/login' },
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

export default router
