<template>
  <div 
    class="c-card"
    :class="getClassCard()"
    >
    <!-- :class="{ 'c-card--red' : isError}" -->
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

    <div v-if="showButtons">
      <button @click="changeCounter(1)" :disabled="isButtonsDisabled">
        Plus one
      </button>
      
      <button @click="changeCounter(-1)" :disabled="isButtonsDisabled">
        Minus one
      </button>
    </div>

    <a :href="link" v-if="link">
      Visit the website
    </a>

    <button @click="changeTitle">
      Execute a method from my parent component
    </button>
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
      link: String,
      isError: Boolean
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
      // Why is it possible to change properties???? @todo -> announcement 
      changeCounter(number) {
        this.counter += number
      },

      getClassCard() {
        if (this.isError) {
          return "c-card--red"
        }

        return ""
      },

      changeTitle() {
        this.$emit("changeTitle");
      }
    },
  }
</script>

<style>
  /* 
    BEM 
    Block : c-[component]
    Element: c-[component]__title
    Modifier: c-[component]--modifier
  */
  .c-card {
    background-color: lightgreen;
    margin: 20px;
  }

  .c-card--red {
    background-color: red;
  }
</style>

