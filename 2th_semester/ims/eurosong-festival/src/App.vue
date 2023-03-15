<template>
  <div id="app">
    <h1>
      {{ this.title.toUpperCase() }}
    </h1>

    <input type="number" v-model="newCounter"/>
    <button @click="addNewCounter()">
      Add counter
    </button>

    <hr>

    New counter : {{  this.newCounter }}

    <hr>

    <CounterComponent 
      v-for="(counter, index) in this.counters" 
      :key="index"

      :initialValue="counter"
    />


    <a :href="website" :target="target">
      Visit my website
    </a>
  </div>
</template>

<script>
  import CounterComponent from './components/CounterComponent.vue'

  export default {
    name: 'App',
    data() {
      return {
        newCounter: 0,
        title: "counter",
        website: "https://collinvandervorst.be",
        target: "_blank",
        counters: [
          0,
          10,
          20,
          30,
          40
        ]
      }
    },
    components: {
      CounterComponent
    },
    methods: {
      addNewCounter() {
        this.counters.push(parseInt(this.newCounter));
      }
    }
  }
</script>