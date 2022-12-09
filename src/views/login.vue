<template>
  <div class="login-page">
    <!-- 顶部栏 -->
    <van-nav-bar title="面经登录" />

    <!-- 表单 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[
          { required: true, message: '用户名必须大于6位', pattern: /^\w{6,}$/ },
        ]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[
          { required: true, message: '密码必须大于6位', pattern: /^\w{6,}$/ },
        ]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit" class="btn"
          >登录</van-button
        >
      </div>
    </van-form>

    <!-- 跳转注册页 -->
    <router-link to="/register" class="link">注册账号</router-link>
  </div>
</template>

<script>
import { userLogin } from '@/api/user'
import { setToken } from '@/utils/local.js'

export default {
  name: 'login-page',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    // 表单提交
    async onSubmit (values) {
      console.log('submit', values)

      const { data } = await userLogin(values)
      console.log(data)
      this.$toast.success('登录成功')
      setToken(data.data.token)
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
.btn {
  border-radius: 3px;
}

.link {
  color: #069;
  font-size: 12px;
  padding-right: 20px;
  float: right;
}
</style>
