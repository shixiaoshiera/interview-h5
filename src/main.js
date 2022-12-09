import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入vant
import '@/utils/vant.js'
import 'amfe-flexible'
import ArticleItem from '@/components/ArticleItem.vue'

Vue.component('ArticleItem', ArticleItem)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
