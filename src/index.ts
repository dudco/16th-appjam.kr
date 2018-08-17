import Vue from 'vue';

import App from './App.vue';
import Clock from './components/clock.vue';
import SheetBtn from './components/sheetBtn.vue';
import Star from './components/stars.vue';
import Board from './components/board.vue';

Vue.component('clock', Clock);
Vue.component('sheet-btn', SheetBtn);
Vue.component('star', Star);
Vue.component('board', Board);
Vue.filter('two_digits', function (value: number) {
  if(value.toString().length <= 1)
  {
      return "0"+value.toString();
  }
  return value.toString();
});

new Vue({
  template: '<App />',
  data: {
    message: "hello"
  },
  components: {
    App
  }
}).$mount('#app')