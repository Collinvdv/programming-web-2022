<template>
  <div>
    <h2>
      {{ title.toUpperCase() }}
    </h2>

    <p>
      Counter with number of <span> {{ counter }}</span>
    </p>

    <p v-html="welcome">
    </p>

    <ul>
      <li v-for="(user, index) in users" :key="index">
        {{ user }}
      </li>
    </ul>

    <ul>
      <li v-for="(user, index) in users" :key="index">
        {{ user }}
      </li>
    </ul>

    <div v-if="showButtons">
      <button @click="addOne()" :disabled="isButtonsDisabled">
        Plus one
      </button>
      
      <button @click="minusOne()" :disabled="isButtonsDisabled">
        Minus one
      </button>
    </div>

    <a :href="link" v-if="link">
      Visit the website
    </a>
  </div>
</template>

<script>
export default {
    // The name of the component
    name: 'Card',
    // Properties from outside of component
    props: {
      title: String,
      showButtons: Boolean,
      isButtonsDisabled: Boolean,
      link: String
    },
    // Data is for internal use
    data() {
      return {
        counter: 0,
        welcome: "Hello <strong> user</strong>",
        users: [
          "Collin",
          "Elke",
          "Tristan"
        ]
      }
    },
    // Functionalities connected with template
    methods: {
      addOne() {
        // Why is it possible to change properties???? @todo -> announcement 
        this.counter++;
      },
      minusOne() {
        this.counter--;
      },
    },
    
  }
</script>

