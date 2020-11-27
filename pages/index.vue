<template>
  <div class="container">
    <h1>NSM: The New Social Media.</h1>
    <h2>A social network with your best interests in mind.</h2>
    <ul>
      <li>No ads!</li>
      <li>No selling your data! Privacy, hooray!</li>
      <li>No over-collecting of information. (Learn More)</li>
      <li>No artificial intelligence or machine learning. (Learn More)</li>
    </ul>

    <div class="posts">
      <UserPost />
      <UserPost />
      <UserPost />
      <UserPost />
      <UserPost />
      <UserPost />
      <UserPost />
    </div>

  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.posts{
  margin: 20px 0;
  border-left: 1px solid $color-border;
  border-right: 1px solid $color-border;
}
</style>
