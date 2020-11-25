<template>
  <nav>
    <div class="nav-container">
      <nuxt-link to="/" class="nav-logo">
        <IconLogo />
      </nuxt-link>

      <ul class="nav">
        <li class="nav__item">
          <IconUser />
        </li>
        <li class="nav__item">
          <IconHome />
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="scss">
nav {
  display: flex;
  background-color: $color-light-gray;
  padding: 10px;
  width: 100%;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: $nav-max-width;
  width: 100%;
  margin: 0 auto;
}

.nav-logo {
  display: inline-block;
  width: auto;
  height: 70px;
}

.nav {
  display: inline-flex;
  justify-content: flex-end;
  width: 100%;

  &__item {
    display: inline-block;
    color: $color-blue;
    width: 30px;
    height: 30px;
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      color: $color-blue-hover;
      cursor: pointer;
    }
  }
}
</style>