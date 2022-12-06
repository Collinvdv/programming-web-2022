<template>
  <div id="app">
    <h1>
      {{ title }}
    </h1>

    <CardComponent 
      v-for="(card, index) in cards"
      :key="index"
      :cardTitle="card.cardTitle"
      :cardLink="card.cardLink"
      :showButtons="card.showButtons"
      :disabledButtons="card.disabledButtons"

      @titleChange="changeTitle()"
    />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: "First vue-experience",
      cards: [
        {
          cardTitle: "Card 1",
          cardLink: "https://google.be",
          showButtons: true,
          disabledButtons: true
        },
        {
          cardTitle: "Card 2",
          cardLink: null,
          showButtons: true,
          disabledButtons: false
        },
        {
          cardTitle: "Card 3",
          cardLink: null,
          showButtons: false,
          disabledButtons: false
        }
      ]
    }
  },
  methods: {
    changeTitle() {
      this.title = "Changed by child component"
    }
  }
}
</script>