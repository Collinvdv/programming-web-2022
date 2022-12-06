import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// Import van de component 
// @TODO why multi./components/CardComponent.vue
import CardComponent from "./components/CardComponent.vue";

Vue.component("CardComponent", CardComponent);

new Vue({
  render: h => h(App),
}).$mount('#app')
