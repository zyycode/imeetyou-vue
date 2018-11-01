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
      <div v-show="hasError" class="alert alert-danger" role="alert">
        输入内容不能为空
      </div>
      <button @click.prevent="register" type="submit" class="btn btn-primary">注册</button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        hasError: false
      };
    },
    methods: {
      async register() {
        if (this.username && this.password) {
          await this.axios.post('/register', {
            username: this.username,
            password: this.password
          })
          this.$router.push({path: '/login'})
          this.$router.go(0)
        } else {
          this.hasError = true
        }
      }
    }
  }
</script>
