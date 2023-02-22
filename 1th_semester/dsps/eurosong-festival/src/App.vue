<template>
  <div id="app">
    <ShowCurrencies/>
    <ConvertCurrencies/>
    <Fluctuation/>
  </div>
</template>

<script>
import ShowCurrencies from'./Pages/ShowCurrencies.vue';
import ConvertCurrencies from'./Pages/ConvertCurrencies.vue';
import Fluctuation from'./Pages/Fluctuation.vue';

export default {
  name: 'App',
  components: {
    ShowCurrencies,
    ConvertCurrencies,
    Fluctuation
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
