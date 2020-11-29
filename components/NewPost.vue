<template>
  <div>
    <form @submit.prevent="handlePostSubmission()">
      <textarea name="post" id="post"></textarea>
      <input type="text" name="post" id="post" placeholder="New post message">

      <button type="submit">Post</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'NewPost',
}
</script>

<style>

</style>