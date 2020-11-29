<template>
  <div class="container">
    <h1>NSM: The New Social Media.</h1>
    <h3>A social network with your best interests in mind.</h3>
    <ul>
      <li>No ads!</li>
      <li>No selling your data! Privacy, hooray!</li>
      <li>No over-collecting of information. (Learn More)</li>
      <li>No artificial intelligence or machine learning. (Learn More)</li>
    </ul>

    <h2 v-if="loading">Loading</h2>

    <div class="posts" v-else>
      <Post
        v-for="(post, index) in posts"
        :key="index"
        :post="post"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    }
  },

  async fetch() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    this.posts = await response.json(); 
  },

  computed: {
    loading() {
      return this.posts.length <= 0;
    }
  }
}
</script>

<style lang="scss" scoped>
.posts {
  margin: 20px 0;
  border-left: 1px solid $color-border;
  border-right: 1px solid $color-border;
}
</style>
