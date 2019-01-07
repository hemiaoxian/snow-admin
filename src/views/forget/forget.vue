<template>
  <!-- 忘记密码 -->
  <div class="forget-wrapper">
    <h1 class="title">- 忘记密码 -</h1>
    <!-- 登录区 -->
    <div class="login">
      <!-- 表单 -->
      <van-cell-group>
        <van-field class="username" clearable focus required border v-model="username" placeholder="手机号" />
        <van-field class="password" clearable blur required v-model="code" placeholder="验证码">
          <van-button slot="button" size="small" type="primary">发送验证码</van-button>
        </van-field>
      </van-cell-group>
      <!-- 按钮 -->
      <van-cell-group>
        <van-button class="login-btn" type="primary">下一步</van-button>
      </van-cell-group>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      username: '',
      code: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import './forget.scss'
</style>
