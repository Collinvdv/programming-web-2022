<template>
  <div id="app">
    <ul>
      <li v-for="(person, index) in this.persons" :key="`persons-${index}`"> 
        {{ person }} - {{  persons[index] }}
      </li>
    </ul>
    <h1> Counter Application</h1>

    <CounterComponent 
      v-for="(counter, index) in this.counterComponents"
      :key="index"
      :initialValue="counter.initialValue"/>

  </div>
</template>

<script>
  // Components 
  import CounterComponent from './components/CounterComponent.vue';

  // Export 
  export default {
    name: 'App',
    components: {
      CounterComponent
    },
    data() {
      return {
        persons: [
          "John",
          "Mohammed",
          "Lisa",
          "Lee"
        ],
        counterComponents: [
          {
            initialValue: 5
          },
          {
            initialValue: 15
          }
        ]
      }
    }
  }
</script>
