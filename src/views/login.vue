<template>
  <div class="login-page">
    <van-nav-bar title="面经登录" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit" class="btn"
          >登录</van-button
        >
      </div>
    </van-form>
    <router-link to="/register" class="link">注册账号</router-link>
  </div>
</template>

<script>
export default {
  name: 'login-page',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
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
