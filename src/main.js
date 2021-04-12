import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';


// import 'prismjs/themes/prism-dark.css';
// import 'prism-themes/themes/prism-cb.css';
// import 'prism-themes/themes/prism-duotone-light.css';
// import 'prism-themes/themes/prism-shades-of-purple.css';
import 'prism-themes/themes/prism-material-light.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
