import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Pages 
import PageRanking from './pages/PageRaking.vue';
import PageHome from './pages/PageHome.vue';
import PageVoting from './pages/PageVoting.vue';
Vue.component("PageRanking", PageRanking);
Vue.component("PageHome", PageHome);
Vue.component("PageVoting", PageVoting);

// Components
import Card from './components/Card.vue';
Vue.component("Card", Card);

new Vue({
  render: h => h(App),
}).$mount('#app')
