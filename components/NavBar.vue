<template>
  <nav>
    <div class="nav-container">
      <nuxt-link to="/" class="nav-logo">
        <IconLogo />
      </nuxt-link>

      <ul class="nav">
        <li class="nav__item">
          <IconHome />
          <span>Home</span>
        </li>
        <li class="nav__item">
          <IconUser />
          <span>Profile</span>
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
  position: relative;
  background-color: $color-light-gray;
  width: $nav-width-mobile;

  @include for-desktop {
    width: $nav-width-desktop;
  }
}

.nav-logo {
  display: inline-block;
  width: auto;
  height: 70px;
}

.nav-container {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 20px;
  left: 0;
  width: $nav-width-mobile;

  @include for-desktop {
    width: $nav-width-desktop;
  }
}

.nav {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 25px auto 0;

  @include for-desktop {
    width: calc(100% - 30px);
  }

  &__item {
    display: inline-flex;
    align-items: center;
    color: $color-blue;
    width: 100%;
    margin: 0 0 10px;

    &:last-child {
      margin: 0;
    }

    &:hover {
      color: $color-blue-hover;
      cursor: pointer;
    }

    svg {
      width: 30px;
      height: 30px;
    }

    span {
      display: none;

      @include for-desktop {
        display: inline-flex;
        margin: 0 20px;
        font-size: 19px;
        font-weight: bold;
      }
    }
  }
}
</style>