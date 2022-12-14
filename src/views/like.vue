<template>
  <div class="like-page">
    <!-- 顶部栏 -->
    <van-nav-bar fixed placeholder title="我的喜欢" />

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
import { getLikeList } from '@/api/article.js'

export default {
  name: 'like-page',
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      page: 1,
      pageSize: 10
    }
  },
  methods: {
    async onLoad () {
      // 异步更新数据
      const { data } = await getLikeList({
        page: this.page,
        pageSize: this.pageSize
      })
      console.log(data)
      this.list.push(...data.data.rows)
      this.loading = false
      this.page++
      if (!data.data.rows.length) {
        console.log(1)
        this.finished = true
        console.log(this.finished)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.like-page {
  margin-bottom: 50px;
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
