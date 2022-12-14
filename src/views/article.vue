<template>
  <div class="article-page">
    <!-- 顶部导航 -->
    <nav class="my-nav van-hairline--bottom">
      <a
        href="javascript:;"
        :class="{ active: sorter === 'weight_desc' }"
        @click="doClick('weight_desc')"
        >推荐</a
      >
      <a
        href="javascript:;"
        :class="{ active: sorter === '' }"
        @click="doClick('')"
        >最新</a
      >
      <div class="logo"><img src="@/assets/logo.png" alt="" /></div>
    </nav>

    <!-- 面经列表 -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <ArticleItem
        v-for="item in list"
        :key="item.id"
        :item="item"
        @click.native="$router.push(`/detail/${item.id}`)"
      ></ArticleItem>
    </van-list>
  </div>
</template>

<script>
import { getArticleList } from '@/api/article.js'
export default {
  name: 'article-page',
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      current: 1,
      pageSize: 10,
      sorter: 'weight_desc'
    }
  },
  methods: {
    async onLoad () {
      // 异步更新数据
      const { data } = await getArticleList({
        current: this.current,
        pageSize: this.pageSize,
        sorter: this.sorter
      })
      console.log(data)
      this.list.push(...data.data.rows)
      this.loading = false
      this.current++
      if (!data.data.rows.length) {
        this.finished = true
      }
    },
    doClick (type) {
      this.sorter = type
      this.list = []
      this.current = 1
      this.finished = false
      this.loading = true
      this.onLoad()
    }
  }
}
</script>

<style lang="less" scoped>
.article-page {
  margin-bottom: 50px;
  margin-top: 44px;
  .my-nav {
    height: 44px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
    background: #fff;
    display: flex;
    align-items: center;
    > a {
      color: #999;
      font-size: 14px;
      line-height: 44px;
      margin-left: 20px;
      position: relative;
      transition: all 0.3s;
      &::after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        width: 0;
        height: 2px;
        background: #222;
        transition: all 0.3s;
      }
      &.active {
        color: #222;
        &::after {
          width: 14px;
        }
      }
    }
    .logo {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      > img {
        width: 64px;
        height: 28px;
        display: block;
        margin-right: 10px;
      }
    }
  }
}
.article-item {
  .head {
    display: flex;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
    .con {
      flex: 1;
      overflow: hidden;
      padding-left: 10px;
      p {
        margin: 0;
        line-height: 1.5;
        &.title {
          width: 280px;
        }
        &.other {
          font-size: 10px;
          color: #999;
        }
      }
    }
  }
  .body {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-top: 10px;
  }
  .foot {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
}
</style>
