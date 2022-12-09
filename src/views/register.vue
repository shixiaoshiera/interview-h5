<template>
  <div class="register-page">
    <!-- 顶部栏 -->
    <van-nav-bar title="面经注册" />

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
          >注册</van-button
        >
      </div>
    </van-form>

    <!-- 跳转登录页 -->
    <router-link to="/login" class="link">有账号，去登录</router-link>
  </div>
</template>

<script>
import { userRegister } from '@/api/user'

export default {
  name: 'register-page',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    // 表单提交
    async onSubmit (values) {
      // console.log(values)
      const { data } = await userRegister(values)
      console.log(data)

      this.$toast.success('注册成功')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.btn {
  border-radius: 3px;
  background-color: #07c160;
  border: 1px solid #07c160;
}

.link {
  color: #069;
  font-size: 12px;
  padding-right: 20px;
  float: right;
}
</style>
