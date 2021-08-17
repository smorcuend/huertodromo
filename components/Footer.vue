<template>
  <div class="footer content has-text-centered">
    <p class="social-footer">
      Puedes encontrarnos en:
      <span class="block">
        <a :href="s.url" v-for="s in social" :key="s.icon">
          <b-icon :icon="s.icon" size="is-large" type="is-success"> </b-icon>
        </a>
      </span>
    </p>
    <p>
      <strong>
        La web de Huertodromo es un proyecto de software abierto usando tecnologías libres.
        <br />
        Creado con <b-icon icon="heart" size="is-small"></b-icon> por
      </strong>
      <a href="https://github.com/smorcuend/huertodromo">Sergio</a>. <br />
      El código fuente está publicado bajo licencia
      <a href="https://es.wikipedia.org/wiki/GNU_General_Public_License">GPLv2</a>.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      social: [
        {
          title: 'Facebook',
          icon: 'facebook',
          url: 'https://www.facebook.com/Huertodromo/'
        }
      ]
    };
  }
};
</script>
<style scoped>
</style>