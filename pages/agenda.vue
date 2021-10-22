<template>
  <main>
    <section class="section card">
      <h1 class="title">Agenda</h1>
      <div class="columns">
        <div class="column">
          <iframe
            :src="externalCalendarSrc"
            style="border: solid 1px #777"
            :width="externalCalendarSize.w"
            :height="externalCalendarSize.h"
            frameborder="0"
            scrolling="no"
          ></iframe>
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
      externalCalendarSize: {w: 1024, h: 600},
      externalCalendarSrc:
        'https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FMadrid&src=cWx2bnFqYnRvamRqbTY1Mmp0ZWo4amhlbHNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23F09300',
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
