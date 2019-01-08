<template>
  <!-- 登录页面 -->
  <div class="login-wrapper">
    <!-- 登录区 -->
    <div class="login">
      <!-- 头像 -->
      <img class="avator" src="../assets/logo.png" alt="">
      <!-- 表单 -->
      <van-cell-group>
        <van-field class="phone" @blur="validationPhone" clearable focus required border v-model="userID" placeholder="手机号" />
        <van-field class="password" @blur="validationPassword" clearable type="password" required v-model="password" placeholder="密码" />
        <router-link to="/Forget" class="forget-password">忘记密码?</router-link>
      </van-cell-group>
      <!-- 按钮 -->
      <van-cell-group>
        <van-button class="login-btn" @click="handleClickLogin" type="primary">登录</van-button>
        <van-button @click="handleToRegister" class="register-btn" plain type="primary">注册</van-button>
      </van-cell-group>
    </div>
    <!-- 服务条款 -->
    <div class="tips">登录即代表阅读并同意 <router-link class="service-rules" to="#">服务条款</router-link></div>
  </div>
</template>
<script>
// 验证手机号码不为空的方法
// import { checkPhone } from '@/assets/js/until.js'
// 发请求的接口
// import { login } from '@/api/index.js'
// webscoket的接口
// import { initWebSocket } from '@/api/webscoket.js'
// 引入axios(后期不需要会去掉)
// import axios from 'axios'
export default {
  data () {
    return {
      // 用户的数据
      userID: 'test',
      password: '123456',
      // 定义一个为null的变量
      websock: null
    }
  },
  methods: {
    // 验证手机号码是否正确
    validationPhone () {
      // checkPhone(this.phone).then(res => {
      //   if (!res) {
      //     // 提示用户
      //     this.$toast('手机号码格式错误')
      //   } else {
      //     console.log('没毛病')
      //   }
      // })
    },
    // 验证密码是否输入
    validationPassword () {
      if (!this.password.length) {
        // 提示用户
        this.$toast('密码不能为空')
      }
    },
    // 点击登录
    handleClickLogin () {
      // // // 构造发送到后台的数据
      // const loginData = {
      //   userID: this.userID,
      //   password: this.password,
      //   actionType: 1
      // }
      // 利用axios发送请求
      // login('userLogin', loginData).then(res => {
      //   console.log(res)
      // })

      // 利用webscoket发请求
      // initWebSocket('userLogin', loginData).then(res => {
      //   console.log(res)
      // })
      this.initWebSocket()
    },
    initWebSocket () { // 初始化weosocket
      const wsuri = 'ws://www.snowstormdoll.cn/ws'
      this.websock = new WebSocket(wsuri)
      this.websock.onmessage = this.websocketonmessage
      this.websock.onopen = this.websocketonopen
      this.websock.onerror = this.websocketonerror
      this.websock.onclose = this.websocketclose
    },
    websocketonopen () { // 连接建立之后执行send方法发送数据
      // 构造发送到后台的数据
      const loginData = {
        userID: this.userID,
        password: this.password,
        actionType: 1
      }
      const params = {message: 'userLogin', data: loginData}
      this.websocketsend(JSON.stringify(params))
    },
    websocketonerror () { // 连接建立失败重连
      this.initWebSocket()
    },
    websocketonmessage (e) { // 数据接收
      // 接收返回的数据
      const redata = JSON.parse(e.data)
      // console.log(redata)
      // const code = redata.data[0].code
      if (redata.message === 'userLoginResult') {
        console.log(redata)
        if (redata.data[0].result === 0) {
          console.log('成功了')
          this.$router.push({
            path: '/Home'
          })
        } else if (redata.data[0].result === 1) {
          // console('数据库错误')
          this.$toast('数据库错误')
        } else if (redata.data[0].result === 2) {
          // console('第一次')
          this.$toast('用户名或密码错误')
        }
      }
    },
    websocketsend (Data) { // 数据发送
      this.websock.send(Data)
    },
    websocketclose (e) { // 关闭
      console.log('断开连接', e)
    },
    // 点击注册按钮跳转到注册页面
    handleToRegister () {
      this.$router.push({
        path: '/Register'
      })
    }
  },
  created () {
    // this.initWebSocket()
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
