import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import ShowCurrencies from'./Pages/ShowCurrencies.vue';
import ConvertCurrencies from'./Pages/ConvertCurrencies.vue';
import Fluctuation from'./Pages/Fluctuation.vue';

Vue.component("ShowCurrencies",ShowCurrencies);
Vue.component("ConvertCurrencies",ConvertCurrencies);
Vue.component("FluctuationPage",Fluctuation);

new Vue({
  render: h => h(App),
}).$mount('#app')
