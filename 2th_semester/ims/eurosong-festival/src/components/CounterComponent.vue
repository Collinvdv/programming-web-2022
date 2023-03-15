<template>
  <div>
    <span>
      {{ this.number }}
    </span>

    <button @click="addOne()">
      +
    </button>

    <button v-on:click="minusOne()" v-if="this.number > 0">
      -
    </button>
  </div>
</template>

<script>
  export default {
    name: 'CounterComponent',
    mounted() {
      this.number = this.initialValue;
    },
    props: {
      initialValue: Number
    },
    data() {
      return {
        number: 0
      }
    },
    methods: {
      addOne() {
        this.number++;
      },

      minusOne() {
        if (this.number > 0 ) this.number--;
      }
    }
  }
</script>