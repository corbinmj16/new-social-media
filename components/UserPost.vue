<template>
  <div class="post">
    <div class="post__left">
      <div class="img">
        <IconUser />
      </div>
    </div>
    <div class="post__right">
      <div class="post-header">
        <h3>Corbin Jensen</h3>
        <ul class="post-header__meta">
          <li>{{ formattedTime }}</li>
        </ul>
      </div>
      
      <div class="post-content">
        <p>Hopefully, this is the only view out of a plane you've seen this week—and it's a doozy. Pilot Santiago Borja snapped the breathtaking image while cruising at 40,000 feet over the Amazon rainforest. Here's the backstory:</p>

        <div class="post-content__image" style="background-image: url('https://pbs.twimg.com/media/En1JMzvXMAEViRH?format=jpg&name=medium');">
          <img src="https://pbs.twimg.com/media/En1JMzvXMAEViRH?format=jpg&name=medium">
        </div>
      </div>

      <ul class="post-actions">
        <li class="post-actions__item"><IconLike /></li>
        <li class="post-actions__item"><IconComment /></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: new Date(),
    }
  },

  computed: {
    formattedTime() {
      return this.time.toDateString();
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  display: flex;
  border-top: 1px solid $color-border;
  padding: 15px 0;
  background-color: #fff;

  &:hover {
    cursor: pointer;
    background-color: $color-light-gray;
  }

  &:last-child {
    border-bottom: 1px solid $color-border;
  }

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

.post-content {
  margin: 5px 0 0;

  &__image {
    background-size: cover;
    height: 100%;
    padding-bottom: 56.25%;
    border-radius: 16px;
    margin: 10px 0 0 ;

    img {
      inset: 0px;
      height: 100%;
      opacity: 0;
      position: absolute;
      width: 100%;
      z-index: -1;
    }
  }
}

.post-actions {
  display: flex;
  margin: 10px 0 0;

  &__item {
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>