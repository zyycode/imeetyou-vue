<template>
  <div id="app">
    <nav class="navbar navbar-light">
      <a class="logo-font" href="/">
        I Meet You
      </a>
      <div class="nav">
        <router-link class="nav-link" :to="'/user/'+user.id ? 0 : user.id " v-show="user">{{user ? user.name : ''}}</router-link>
        <router-link class="nav-link" to="/">首页</router-link>
        <router-link class="nav-link" to="/login" v-show="!user">登录</router-link> 
        <router-link class="nav-link" to="/register" v-show="!user">注册</router-link> 
        <router-link class="nav-link" to="/publish" v-show="user">发帖</router-link> 
        <button class="btn btn-link text-danger" @click="logout" v-show="user">退出</button>
      </div>
    </nav>
    <div class="container content">
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        user: null
      }
    },
    methods: {
      logout() {
        this.user = null
        this.axios.get('/logout')
        // document.cookie = 'userId=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT'
      }
    },
    async created() {
      let res = await this.axios.get('/api/userinfo')
      this.user = res.data
    },
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  .content {
    background-color: #fff;
    margin-top: 20px;
    border-radius: 10px;
    padding: 10px;
  }
  ul {
    padding: 0;
  }
  ul li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  .nav a, .nav button {
    font-weight: bold;
    color: #000;
    font-size: 16px;
    padding: .2rem .5rem;
  }
  .logo-font{
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
    background-image: 
      linear-gradient(
        to right,
        #1A349E   0%,
        #1A709E 10%,
        #1A9E6C 20%,
        #1A9E8E 30%,
        #1A9E56 40%,
        #309E1A 50%,
        #1A349E 60%,
        #1A709E 70%,
        #1A9E6C 80%,
        #309E1A 90%
        #1A349E 100%);
    background-size:200% 100%;
    -webkit-background-clip:text;
    color:transparent;
    animation:move 3s infinite linear;
  }
  @keyframes move{
    0%{
      background-position: 0 0;
    }
    100%{
      background-position: -100% 0;
    }
  }
</style>
