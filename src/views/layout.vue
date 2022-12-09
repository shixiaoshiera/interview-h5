<template>
  <div class="layout-page">
    <!-- 顶部导航 -->
    <van-nav-bar fixed placeholder>
      <template #left>
        <van-tabs v-model="active">
          <van-tab title="推荐"></van-tab>
          <van-tab title="最新"></van-tab>
        </van-tabs>
      </template>

      <template #right>
        <img src="../assets/logo.png" alt="" />
      </template>
    </van-nav-bar>

    <!-- 首页架子 - 内容区域 -->
    <router-view></router-view>

    <!-- 底部tabbar - 区域 -->
    <van-tabbar route>
      <van-tabbar-item to="/article" icon="notes-o">面经</van-tabbar-item>
      <van-tabbar-item to="/collect" icon="star-o">收藏</van-tabbar-item>
      <van-tabbar-item to="/like" icon="like-o">喜欢</van-tabbar-item>
      <van-tabbar-item to="/user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'layout-page',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style lang="less" scoped>
.van-nav-bar__right {
  img {
    height: 28px;
  }
}

.van-tabs__line {
  width: 14px;
  height: 2px;
  background-color: #222222;
}
</style>
