import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// Import van de pagina's 
import PageRanking from './pages/PageRanking.vue';
Vue.component("PageRanking", PageRanking);

import PageHome from './pages/PageHome.vue';
Vue.component("PageHome", PageHome);

import PageVoting from './pages/PageVoting.vue';
Vue.component("PageVoting", PageVoting);

// Import van de component 
import CardComponent from "./components/CardComponent.vue";

Vue.component("CardComponent", CardComponent);

new Vue({
  render: h => h(App),
}).$mount('#app')
