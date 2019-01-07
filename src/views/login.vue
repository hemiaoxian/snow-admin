<template>
  <!-- 登录页面 -->
  <div class="login-wrapper">
    <!-- 登录区 -->
    <div class="login">
      <!-- 头像 -->
      <img class="avator" src="../assets/logo.png" alt="">
      <!-- 表单 -->
      <van-cell-group>
        <van-field class="phone" @blur="validationPhone" clearable focus required border v-model="phone" placeholder="手机号" />
        <van-field class="password" @blur="validationPassword" clearable type="password" required v-model="password" placeholder="密码" />
        <router-link to="/Forget" class="forget-password">忘记密码?</router-link>
      </van-cell-group>
      <!-- 按钮 -->
      <van-cell-group>
        <van-button class="login-btn" type="primary">登录</van-button>
        <van-button @click="handleToRegister" class="register-btn" plain type="primary">注册</van-button>
      </van-cell-group>
    </div>
    <!-- 服务条款 -->
    <div class="tips">登录即代表阅读并同意 <router-link class="service-rules" to="#">服务条款</router-link></div>
  </div>
</template>
<script>
import { checkPhone } from '@/assets/js/until.js'
export default {
  data () {
    return {
      phone: '',
      password: ''
    }
  },
  methods: {
    // 验证手机号码是否正确
    validationPhone () {
      checkPhone(this.phone).then(res => {
        if (!res) {
          // 提示用户
          this.$toast('手机号码格式错误')
        } else {
          console.log('没毛病')
        }
      })
    },
    // 验证密码是否输入
    validationPassword () {
      if (!this.password.length) {
        // 提示用户
        this.$toast('密码不能为空')
      }
    },
    // 点击注册按钮跳转到注册页面
    handleToRegister () {
      this.$router.push({
        path: '/Register'
      })
    }
  },
  computed: {
    isCanLogin () {
      if (this.phone.length === 0 || this.password.length === 0) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.login-wrapper{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 16px 10px;
  box-sizing: border-box;
  background-color: #f0eff5;
  .login{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 80px;
    .avator{
      width: 100px;
      height: 100px;
      background-color: #fff;
      border-radius: 50%;
      margin-bottom: 20px;
      // box-shadow: 0px 1px 5px 0px #333;
    }
    .van-cell-group{
      width: 100%;
      margin-bottom: 30px;
      .phone{
        width: 100%;
        border: 1px solid #dadada;
        border-bottom: none;
        border-radius: 4px 4px 0px 0px;
      }
      .password{
        margin-bottom: 20px;
        border: 1px solid #dadada;
        border-radius: 0px 0px 4px 4px;
      }
      .forget-password{
        color: #999;
        text-align: right;
        font-size: 14px;
        position: absolute;
        right: 0;
      }
    }
    .login-btn{
      width: 100%;
      margin-bottom: 15px;
    }
    .register-btn{
      width: 100%;
    }
  }
  .tips{
    text-align: center;
    color: #bbb;
    font-size: 14px;
    .service-rules{
      color: rgb(78, 137, 238);
    }
  }
}
</style>
