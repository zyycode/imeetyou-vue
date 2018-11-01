<template>
  <div>
    <hgroup>
      <h2>{{post.title}}</h2>
      <h6><router-link :to="'/user/' + post.userId">{{post.name}}</router-link> - {{new Date(post.timetamp).toLocaleString()}}</h6>
    </hgroup>
    <hr>
    <div>{{post.content}}</div>
    <div class="space-content"></div>
    <h4>留言:</h4>
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        {{comment.content}} - <router-link :to="'/user/' + comment.userId">{{comment.name}}</router-link>
      </li>
    </ul>
    <div class="form-group">
      <textarea v-model="myComment" class="form-control"></textarea>
    </div>
    <button @click="postComment" class="btn btn-primary">评论</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        post: {},
        comments: [],
        myComment: '',
      }
    },
    methods: {
      async postComment() {
        let res = await this.axios.post('/add-coment', {
          content: this.myComment,
          postid: this.$route.params.id
        })
        this.myComment = ''
        let comment = res.data
        this.comments.push(comment)
      }
    },
    async created() {
      let postId = this.$route.params.id
      let res = await this.axios.get('/api/post/' + postId)
      this.post = res.data

      let commentRes = await this.axios.get('/api/coments/' + postId)
      this.comments = commentRes.data
    }
  }
</script>

<style scoped>
  .space-content {
    height: 20px;
    background-color: #fff;
    margin: 10px -15px;
  }
</style>
