<template>
  <div class="container">
    <h1>Indy: The responsible social network.</h1>
    <h2>A social network with your best interests in mind.</h2>
    <ul>
      <li>No ads.</li>
      <li>No artificial intelligence or machine learning.</li>
      <li>No selling your data.</li>
      <li>No over-collecting of information.</li>
    </ul>

    <div class="posts">
      <div class="post">
        <div class="post__left">
          <div class="img">
            <IconUser />
          </div>
        </div>
        <div class="post__right">
          <h3>Corbin Jensen</h3>
          <p>This is the actual post</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.post {
  display: flex;
  border: 1px solid #000;
  border-radius: 4px;
  padding: 15px 0;

  &__left {
    max-width: 70px;
    padding: 5px 10px;

    .img {
      width: 49px;
      height: 49px;
    }
  }

  &__right {
    flex: 1;
    padding-right: 15px;
  }
}
</style>
