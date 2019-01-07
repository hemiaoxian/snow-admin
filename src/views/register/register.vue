<template>
  <!-- 注册页面 -->
  <div class="register-wrapper">
    <h1 class="title">- 用户注册 -</h1>
    <!-- 登录区 -->
    <div class="login">
      <!-- 表单 -->
      <van-cell-group>
        <van-field class="username" clearable focus required border v-model="phone" placeholder="姓名" />
        <div class="tips">请填写真实姓名以便审核</div>
        <van-field class="phone" clearable focus required border v-model="phone" placeholder="手机号" />
        <van-field class="password" type="password" clearable focus required border v-model="password" placeholder="密码" />
        <van-field class="repassword" type="password" clearable focus required border placeholder="确认密码" />
        <van-field class="code" clearable blur required v-model="code" placeholder="验证码">
          <van-button slot="button" size="small" type="primary">发送验证码</van-button>
        </van-field>
      </van-cell-group>
      <!-- 按钮 -->
      <van-cell-group>
        <van-button class="register-btn" type="primary">注册</van-button>
        <van-button plain class="login-btn" type="primary">登录</van-button>
      </van-cell-group>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      username: '',
      phone: '',
      code: '',
      password: ''
    }
  }
}
</script>
<style lang="scss" scoped>
@import './register.scss';
</style>
