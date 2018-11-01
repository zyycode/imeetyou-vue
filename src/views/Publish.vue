<template>
  <div>
    <h3>发布文章</h3>
    <form>
      <div class="form-group">
        <label for="title">标题</label>
        <input v-model="title" type="text" class="form-control" id="title" placeholder="请输入标题">
      </div>
      <div class="form-group">
        <label for="postContent">文章内容</label>
        <textarea v-model="content" class="form-control" id="postContent" rows="3" placeholder="请输入内容"></textarea>
      </div>
      <button @click.prevent="publish" class="btn btn-primary">发布</button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: '',
        content: ''
      }
    },
    methods: {
      async publish() {
        let res = await this.axios.post('/add-post', {
          title: this.title,
          content: this.content,
        })
        let post = res.data
        this.$router.push({path: `/post/${post.id}`})
      }
    }
  }
</script>
