<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { userLogin } from '@/api/user.js'

export default {
  async created () {
    const { data } = await userLogin({
      username: 'wuhan87',
      password: '123456'
    })
    console.log(data)
  }
}
</script>

<style>
</style>
