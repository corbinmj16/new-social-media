<template>
  <div class="post">
    <h2>Post: {{ this.post }}</h2>
    <h2>User: {{ this.user }}</h2>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const { user, post } = params;

    return {
      user,
      post,
    };
  }
}
</script>

<style>

</style>