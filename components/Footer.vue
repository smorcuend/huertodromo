<template>
  <div class="footer is-fixed-bottom">
    <div class="columns social-footer has-text-right">
      Puedes encontrarnos en:
      <div class="social-footer-icons">
        <ul class="buttons">
          <li v-for="s in social" :key="s.icon">
            <a :href="s.url">
              <b-icon :icon="s.icon" size="is-large" type="is-success"> </b-icon>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="columns has-text-centered">
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
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      social: [
        {
          title: 'Flickr',
          icon: 'flickr',
          url: 'https://www.flickr.com/'
        },
        {
          title: 'Youtube',
          icon: 'youtube',
          url: 'https://youtube.com'
        },
        {
          title: 'Facebook',
          icon: 'facebook',
          url: 'https://facebook.com'
        }
      ]
    };
  }
};
</script>
<style lang"scss">
/* .social-footer {
  padding: 1rem;
  background: #bfb;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .social-footer-icons {
    li:last-of-type {
      margin-right: 0;
    }

    .fa {
      font-size: 1.3rem;
      color: #fff;

      &:hover {
        color: #999;
        transition: color 0.3s ease-in;
      }
    }
  }
} */
</style>