 <template>
  <main>
    <section class="section card">
      <h1 class="title">Redes sociales</h1>
      <div class="columns">
        <div class="column">
          <article class="panel is-primary">
            <a
              class="panel-block"
              v-for="am in amList"
              :key="am.id"
              :href="am.link"
              target="_blank"
            >
              <span class="panel-icon">
                <i class="mdi mdi-network" aria-hidden="true"></i>
              </span>
              <a>
                {{ am.title }}
              </a>
            </a>
          </article>
        </div>
      </div>

      <h2 class="is-size-4 m-5">y también las digitales:</h2>

      <div class="columns">
        <div class="column" v-for="sm in smList" :key="sm.id">
          <div class="card">
            <a :href="sm.link" target="_blank">
              <div class="card-body has-text-centered pt-3">
                <h3 class="is-size-3">{{ sm.title }}</h3>
                <b-icon :icon="sm.icon" :type="sm.color" class="sm-icon m-6"> </b-icon>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import {digitalSN, linkSN} from '../static/social_network';
export default {
  async created() {},
  data() {
    return {
      loaded: false
    };
  },
  computed: {
    smList() {
      return digitalSN;
    },
    amList() {
      return linkSN;
    }
  },
  methods: {}
};
</script>

<style>
.sm-icon i::before {
  font-size: 6rem !important;
}
</style>
