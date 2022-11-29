import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Components
import Card from './components/Card.vue';
Vue.component("Card", Card);

new Vue({
  render: h => h(App),
}).$mount('#app')
