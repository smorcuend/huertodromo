import { VueConstructor } from 'vue/types/umd';
import Vue from 'vue';
import dayjs from 'dayjs';
require('dayjs/locale/es');

type DayjsConfig = {
  locale: string;
  plugins: string[]; // https://day.js.org/docs/en/plugin/plugin
};

const Dayjs = {
  install(Vue: VueConstructor, config: DayjsConfig): void {
    if (config.locale) {
      dayjs.locale(config.locale);
    }
    if (Array.isArray(config.plugins)) {
      // config.plugins.forEach((element) => {
      //   // eslint-disable-next-line @typescript-eslint/no-var-requires
      //   const p = require(`dayjs/plugin/${element}`)
      //   dayjs.extend(p);
      // });
    }
    Vue.prototype.$date = (date: string): dayjs.Dayjs => {
      return dayjs(date);
    };
    Vue.filter('date', function (value: string, format?: string) {
      return dayjs(value).format(format);
    });
  }
};

export default Dayjs;

// Inside main.ts
// import { Dayjs } from 'plugins/Dayjs';
Vue.use(Dayjs, { locale: 'es' });

// Inside Component
// this.$date('2019-01-25');
// Inside template
// <span>{{ myDate | date }}</span>
// <span>{{ myDate | date('DD/MM/YYYY') }}</span>
