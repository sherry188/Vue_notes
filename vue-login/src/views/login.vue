<template>
  <div>
    <div class="title">后台登录</div>
    <div class="form">
      <el-input class="userName" v-model="userName" placeholder="用户名"></el-input>
      <el-input class="password" v-model="password" placeholder="密码"></el-input>
      <div class="verify">
        <span class="img" v-html="url" @click="changeCode"/>
        <el-input class="securityCode" v-model="securityCode" placeholder="验证码"></el-input>
      </div>
      <el-button class="login" type="primary" round @click="login">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userName: '',
      password: '',
      securityCode: '',
      url: ''
    }
  },
  mounted () {
    this.changeCode()
  },
  methods: {
    changeCode () {
      this.$http.get('/user/captcha', {}).then((result) => {
        this.url = result.data.data
        // console.log(result.data.data)验证码
      }).catch((error) => {
        console.log(error)
      })
    },
    login () {
      const data = {
        userName: this.userName,
        password: this.password,
        captcha: this.securityCode
      }
      this.$http.post('/user/login', data)
        .then((result) => {
          if (result.data.code === 0) {
            this.$cookies.set('userInfo', result.data.data.token) // 设置cookies
            this.$router.push('/main/home') // 跳转到home页面
          } else {
            this.$notify.error({  // 弹出验证码错误提示
              title: '错误',
              message: result.data.msg
            })
            this.changeCode()
          }
        })
    }
  }
}
</script>

<style lang="less">
  .title{
    font-size: 40px;
    margin-top: 60px;
  }
  .form{
    width: 448px;
    margin: 0 auto;
    .userName{
      margin-top: 30px;
    }
    .password{
      margin-top: 30px;
    }
    .verify{
      margin-top: 30px;
      .img{
        display: inline-block;
        height: 40px;
        border: 1px solid red;
        width: 35%;
        vertical-align: top;
      }
      .securityCode{
        width: 60%;
        display: inline-block;
        vertical-align: top;
      }
    }
    .login{
      margin-top: 30px;
      width: 100%;
    }
  }
</style>
