<!-- layouts/default.vue -->
<template>
  <div class="wrapper">
    <NavBar />
    <div id="main" class="container is-fullhd">
      <Nuxt class="mt-6 mb-6"/>
    </div>
    <Footer id="footer" class=" pt-6 pb-6" />
  </div>
</template>
<style lang="scss">
html,
body {
  height: 100%;
  width: 100%;
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
#wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
#main {
  flex: 1;
}
#footer {
  align-content: flex-end;
}
</style>