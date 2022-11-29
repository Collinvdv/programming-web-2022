<template>
  <div id="app">
    <h1>
      {{ title }}
    </h1>

    <Card 
      v-for="(card, index) in cards" 
      :key="index"

      :title="card.title"
      :showButtons="card.showButtons"
      :isButtonsDisabled="card.isButtonsDisabled"
      :link="card.link"
      :isError="card.isError"

      @changeTitle="changeTitle"
    ></Card>

  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        title: "Playground vue.js",
        cards: [
          {
            title: "test 1",
            showButtons: true,
            isButtonsDisabled: false,
            link: "https://youtube.com"
          },
          {
            title: "test 2",
            showButtons: false,
            isButtonsDisabled: false,
            link: null,
            isError: true
          },
          {
            title: "test 3",
            showButtons: true,
            isButtonsDisabled: true,
            link: null
          }
        ]

      }
  },
    methods: {
      changeTitle() {
        this.title = "You changed the title by clicking on a chld component";
      }
    }
  }
</script>