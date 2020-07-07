// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'element-ui/lib/theme-default/index.css';
import App from './App';
import router from './router';


import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);



import VueTabs from 'vue-nav-tabs'
import 'vue-nav-tabs/themes/vue-tabs.css'
Vue.use(VueTabs)

import VueTelInput from 'vue-tel-input';
Vue.use(VueTelInput)




import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css';
import { vsButton, vsSelect,vsInput } from 'vuesax';
Vue.use(vsButton);
Vue.use(vsSelect);
Vue.use(vsInput);

Vue.config.productionTip = false;
Vue.use(Vuesax)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App,
  },
});

