import Vue from 'vue';

import App from './App.vue';
import Clock from './components/clock.vue';
import SheetBtn from './components/sheetBtn.vue';

Vue.component('clock', Clock);
Vue.component('sheet-btn', SheetBtn);

new Vue({
  template: '<App />',
  components: {
    App
  }
}).$mount('#app')