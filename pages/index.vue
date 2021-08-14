<template>
  <main>
    <section class="hero is-white">
      <div class="hero-body">
        <div class="columns is-vcentered">
          <div class="column">
            <div class="media tile">
              <div class="media-left">
                <img src="/logo.jpeg" class="b-image" alt="Logo huertodromo" />
              </div>
              <div class="media-content">
                <div class="content">
                  <p class="title m-6">
                    Nace como un espacio abierto en Toledo para sembrar y cosechar convivencia, respeto, aprecio,
                    conciencia ecológica, manejo de residuos y conservación del entorno. Este
                    espacio se gestiona con decisiones y trabajo colectivo, donde aprendemos todos
                    de todos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <Carousel />
    </section>
    <section>
      <Posts />
    </section>
  </main>
</template>

<script>
import Carousel from '../components/Carousel.vue';
import Posts from '../components/Posts.vue';
export default {
  components: { Carousel, Posts },
  data() {
    return {};
  }
};
</script>
<style scoped>
.b-image {
  max-height: 300px;
  width: auto;
}
</style>
