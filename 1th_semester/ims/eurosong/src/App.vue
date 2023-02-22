<template>
  <div id="app">
    <!-- Navigatie -->
    <nav>
      <ul>
        <li v-for="(page, index) in pages" :key="index" @click="setActivePage(page)">
          {{ page }}
        </li>
      </ul>
    </nav>

    <!-- Pages -->
    <PageRanking v-if="activePage == 'ranking'"/>
    <PageHome  v-if="activePage == 'home'"/>
    <PageVoting  v-if="activePage == 'voting'"/>
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      activePage: "home",
      pages: [
        "home",
        "ranking",
        "voting"
      ]
    }
  },
  methods: {
    setActivePage(page) {
      this.activePage = page;
    }
  }
}
</script>