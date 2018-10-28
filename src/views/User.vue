<template>
  <div>
    <h4>{{user.name}}</h4>
    <p>他发过的帖子</p>
    <ul>
      <li v-for="post in userPosts" :key="post.id" class="post-item">
        <a :href="'/post/' + post.id">{{post.title}}</a>
        <a :href="'http://127.0.0.1:3000/del-post/' + post.id" class="badge badge-danger post-del">删除</a>
      </li>
    </ul>
    <p>他发过的评论</p>
    <ul>
      <li v-for="coment in userComents" :key="coment.id">
        <h3>
          <span>{{coment.postTitle}}</span>
          <a :href="'http://127.0.0.1:3000/del-coment/' + coment.id" class="badge badge-danger post-del">删除</a>
        </h3>
        <p>{{coment.content}}</p>
        <p>评论时间: {{new Date(coment.timetamp).toLocaleString()}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {},
        userPosts: [],
        userComents: []
      }
    },
    methods: {
      
    },
    async created() {
      let userId = this.$route.params.id
      let res = await this.axios.get('http://127.0.0.1:3000/api/user/' + userId)
      this.user = res.data.user
      this.userPosts = res.data.userPosts
      this.userComents = res.data.userComents
    }
  }
</script>

<style scoped>
  .post-item a:nth-child(1){
    font-size: 2em;
    color: #155724;
  }
  .post-del {
    font-size: 12px;
    margin-left: 20px;
  }
</style>
