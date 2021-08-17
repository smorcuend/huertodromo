<template>
  <main>
    <section class="section card">
      <h1 class="title">Agenga</h1>
      <div class="columns">
        <div class="column">
          <vue-cal
            :time-from="9 * 60"
            :disable-views="['years', 'year']"
            active-view="month"
            hide-weekends
            events-on-month-view="short"
            :events="events"
            style="height: 600px"
            locale="es"
          >
          </vue-cal>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import vuecal from 'vue-cal';
export default {
  components: { 'vue-cal': vuecal },
  async created() {},
  data() {
    return {
      loaded: false,
      events: [
        {
          start: '2021-08-18 18:00',
          end: '2021-08-18 21:00',
          title: 'Asamblea general',
          class: 'leisure',
          content: 'Asamblea general verano'
        }
      ]
    };
  },
  methods: {}
};
</script>
<style>
.vuecal--month-view .vuecal__cell {
  height: 80px;
}

.vuecal--month-view .vuecal__cell-content {
  justify-content: flex-start;
  height: 100%;
  align-items: flex-end;
}

.vuecal--month-view .vuecal__cell-date {
  padding: 4px;
}
.vuecal--month-view .vuecal__no-event {
  display: none;
}
</style>
