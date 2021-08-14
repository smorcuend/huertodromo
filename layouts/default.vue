<!-- layouts/default.vue -->
<template>
  <div class="container is-fullhd">
    <NavBar />
    <Nuxt />
    <Footer />
  </div>
</template>
<style lang="scss">
html,
body {
  height: 100%;
  width: 100%;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    background-image: url('/huertodromo_bg.jpeg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: rgba(255, 255, 255, 0.3);
    opacity: 0.2;
  }
}
</style>