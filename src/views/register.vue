<template>
  <div class="register-page">
    <van-nav-bar title="面经注册" />
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
          >注册</van-button
        >
      </div>
    </van-form>
    <router-link to="/login" class="link">有账号，去登录</router-link>
  </div>
</template>

<script>
export default {
  name: 'register-page',
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
