<template>
  <div class="home">
		<!-- <router-link to="/post"><h2>Home</h2></router-link> -->
    <ul>
			<li v-for="post in posts" :key="post.id" class="alert alert-success">
        <span class="post-title">主题</span>
				<router-link :to="'/post/' + post.id">{{post.title}}</router-link>
        <span class="float-right badge badge-success post-user">发帖人：<router-link :to="'/user/'+post.userId">{{post.name}}</router-link></span>
			</li>
		</ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      posts: []
    }
  },
  async created() {
    let res = await this.axios.get('/api/posts')
    this.posts = res.data
  }
}
</script>

<style scoped>
  .home {
    /* background-color: #e1e1e1; */
    margin: -10px -15px -28px;
  }
  ul li a {
    color: #000;
    font-size: 16px;
  }
  ul li {
    line-height: 2em;
    border-top: 1px solid #f0f0f0;
    border-radius: 15px;
  }
  ul li:nth-child(1) {
    border-top: none;
  }
  .post-title {
    font-size: 1.1em;
    margin-right: 5px;
    font-weight: bold;
  }
  .post-user {
    margin-top: 6px;
  }
  .post-user a {
    color: #fff;
  }
  .post-user a:hover {
    text-decoration: none;
    color: #6c757d;
    transition: color .3s;
  }
</style>

