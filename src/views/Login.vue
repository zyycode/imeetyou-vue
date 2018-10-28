<template>
  <div>
    <form>
      <div class="form-group">
        <label for="LoginName">用户名</label>
        <input v-model="username" type="text" class="form-control" id="LoginName" placeholder="请输入用户名">
      </div>
      <div class="form-group">
        <label for="LoginPassword">密码</label>
        <input v-model="password" type="password" class="form-control" id="LoginPassword" placeholder="请输入密码">
      </div>
      <div class="form-group">
        <label for="captchaCheck">验证码(区分大小写)</label>
        <input v-model="captcha" type="text" class="form-control" id="captchaCheck" placeholder="请输入验证码">
        <img src="http://127.0.0.1:3000/captcha" alt="captcha">
      </div>
      <div v-show="hasError" class="alert alert-danger" role="alert">
        您输入的账户密码或验证码不正确
      </div>
      <button @click.prevent="login" type="submit" class="btn btn-primary">登录</button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        captcha: '',
        hasError: false,
      };
    },
    methods: {
      // async login() {
      //    this.axios.post('http://127.0.0.1:3000/login', {
      //     username: this.username,
      //     password: this.password,
      //     captcha: this.captcha,
      //   }).catch(() => {
      //     this.hasError = true
      //   })
        
      async login() {

        try {
          let res = await this.axios.post('http://127.0.0.1:3000/login', {
            username: this.username,
            password: this.password,
            captcha: this.captcha,
          })
          this.$root.user = res.data
          this.$router.push({path: '/'})
          this.$router.go(0)
        } catch(e) {
          this.hasError = true
          this.$router.go(0)
        }
        
        
      }
    }
  }
</script>
